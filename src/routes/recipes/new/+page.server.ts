// src/routes/recipes/new/+page.server.ts
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ locals }) => {
  // Require login before viewing the "new recipe" page
  //if (!locals.user) {
    //throw redirect(303, '/login');
  //}

  return {};
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    // Double-check auth on submit
    if (!locals.user) {
      return fail(401, {
        message: 'You must be logged in to create a recipe.'
      });
    }

    const form = await request.formData();

    const title = (form.get('title') ?? '').toString().trim();
    const description = (form.get('description') ?? '').toString().trim();
    const ingredientsRaw = (form.get('ingredients') ?? '').toString();
    const instructionsRaw = (form.get('instructions') ?? '').toString();

    // Basic validation
    if (!title) {
      return fail(400, {
        message: 'Title is required.',
        values: {
          title,
          description,
          ingredients: ingredientsRaw,
          instructions: instructionsRaw
        }
      });
    }

    // Turn comma-separated ingredients into a string[]
    const ingredients = ingredientsRaw
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean);

    // Turn newline-separated instructions into a string[]
    const instructions = instructionsRaw
      .split('\n')
      .map((i) => i.trim())
      .filter(Boolean);

    try {
      const recipe = await prisma.recipe.create({
        data: {
          title,
          description,
          ingredients,
          instructions,
          // Prisma relation: Recipe.user -> User
          user: {
            connect: {
              id: locals.user.id
            }
          }
        }
      });

      // You can redirect to the recipe detail page if you have one
      // throw redirect(303, `/recipes/${recipe.id}`);

      return {
        success: true,
        recipeId: recipe.id
      };
    } catch (err) {
      console.error('Error creating recipe:', err);
      return fail(500, {
        message: 'Something went wrong creating the recipe.'
      });
    }
  }
};
