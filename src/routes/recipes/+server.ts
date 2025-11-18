import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const POST = async ({ request }) => {
  const data = await request.json();

  const recipe = await prisma.recipe.create({
    data
  });

  return new Response(JSON.stringify(recipe));
};
