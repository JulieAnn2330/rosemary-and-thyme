// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ params, fetch }: Parameters<PageServerLoad>[0]) => {
  const res = await fetch(`/api/recipes/${params.id}`);
  if (!res.ok) return { recipe: null };
  const recipe = await res.json();
  return { recipe };
};

