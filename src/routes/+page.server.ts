import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
  const q = url.searchParams.get('q')?.toLowerCase() ?? '';
  const res = await fetch('/api/recipes');
  const all = (await res.json()) as Array<{
    id: string; title: string; description?: string | null; createdAt: string;
  }>;

  const filtered = q
    ? all.filter(r =>
        r.title.toLowerCase().includes(q) ||
        (r.description ?? '').toLowerCase().includes(q)
      )
    : all;

  return { recipes: filtered, q };
};

export const actions: Actions = {
  create: async ({ request, fetch }) => {
    const form = await request.formData();
    const res = await fetch('/api/recipes', { method: 'POST', body: form });
    if (!res.ok) {
      return { error: await res.text() };
    }
    return { success: true };
  }
};