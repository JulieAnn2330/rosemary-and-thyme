import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const res = await fetch(`/api/recipes/${params.id}`);
  if (!res.ok) return { recipe: null };
  const recipe = await res.json();
  return { recipe };
};

