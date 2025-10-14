import { prisma } from '$lib/db';
import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const actions = {
  default: async ({ request, locals }) => {
    // Validate user session
    const session = locals.user;
    if (!session) throw redirect(303, '/login');

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const ingredients = formData.get('ingredients') as string;
    const instructions = formData.get('instructions') as string;
    const file = formData.get('photo') as File | null;

    let imageUrl = null;

    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('recipe-images')
        .upload(fileName, file);
      if (!error) {
        const { data: publicUrlData } = supabase.storage.from('recipe-images').getPublicUrl(fileName);
        imageUrl = publicUrlData.publicUrl;
      }
    }

    await prisma.recipe.create({
      data: {
        title,
        ingredients,
        instructions,
        imageUrl,
        userId: session.id
      }
    });

    throw redirect(303, '/recipes');
  }
};
