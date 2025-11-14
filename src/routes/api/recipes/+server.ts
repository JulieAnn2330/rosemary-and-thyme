import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';

const prisma = new PrismaClient();

export const GET: RequestHandler = async () => {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: 'desc' },
    select: { id: true, title: true, description: true, createdAt: true }
  });
  return new Response(JSON.stringify(recipes), {
    headers: { 'content-type': 'application/json' }
  });
};

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  const title = (form.get('title') as string)?.trim();
  const description = (form.get('description') as string)?.trim() || null;
  const ingredients = (form.get('ingredients') as string || '')
    .split('\n').map(s => s.trim()).filter(Boolean);
  const instructions = (form.get('instructions') as string || '')
    .split('\n').map(s => s.trim()).filter(Boolean);

  if (!title) return new Response('Title required', { status: 400 });

  const created = await prisma.recipe.create({
    data: { title, description, ingredients, instructions }
  });

  return new Response(JSON.stringify(created), {
    headers: { 'content-type': 'application/json' },
    status: 201
  });
};
