import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ params }) => {
  const recipe = await prisma.recipe.findUnique({
    where: { id: params.id }
  });

  if (!recipe) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(JSON.stringify(recipe), {
    headers: { 'content-type': 'application/json' }
  });
};
