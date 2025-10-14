import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: { user: true }
    });
    return new Response(JSON.stringify(recipes), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error fetching recipes:', err);
    return new Response('Internal Server Error', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST({ request }) {
  try {
    const data = await request.json();

    const newRecipe = await prisma.recipe.create({
      data: {
        title: data.title,
        description: data.description,
        ingredients: data.ingredients || [],
        instructions: data.instructions || []
      }
    });

    return new Response(JSON.stringify(newRecipe), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error creating recipe:', err);
    return new Response('Internal Server Error', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}