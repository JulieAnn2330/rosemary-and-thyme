import { p as prisma } from "../../../../chunks/db.js";
import { redirect } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_URL = "https://cakluazpdlznqsjhcetj.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNha2x1YXpwZGx6bnFzamhjZXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODM1MDksImV4cCI6MjA3NTQ1OTUwOX0.TEcwF5vLtv-imIzn8z-EtDewR3GGiaAvruireOFQ0uU";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
const actions = {
  default: async ({ request, locals }) => {
    const session = locals.user;
    if (!session) throw redirect(303, "/login");
    const formData = await request.formData();
    const title = formData.get("title");
    const ingredients = formData.get("ingredients");
    const instructions = formData.get("instructions");
    const file = formData.get("photo");
    let imageUrl = null;
    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage.from("recipe-images").upload(fileName, file);
      if (!error) {
        const { data: publicUrlData } = supabase.storage.from("recipe-images").getPublicUrl(fileName);
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
    throw redirect(303, "/recipes");
  }
};
export {
  actions
};
