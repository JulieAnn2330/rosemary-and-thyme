import { prisma } from '$lib/db';

export async function load() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: 'desc' } });
  return { recipes };
}
