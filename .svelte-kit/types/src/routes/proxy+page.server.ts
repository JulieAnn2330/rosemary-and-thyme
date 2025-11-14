// @ts-nocheck
import type { Actions, PageServerLoad } from './$types';

export const load = async ({ fetch, url }: Parameters<PageServerLoad>[0]) => {
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

export const actions = {
  create: async ({ request, fetch }: import('./$types').RequestEvent) => {
    const form = await request.formData();
    const res = await fetch('/api/recipes', { method: 'POST', body: form });
    if (!res.ok) {
      return { error: await res.text() };
    }
    return { success: true };
  }
};
;null as any as Actions;