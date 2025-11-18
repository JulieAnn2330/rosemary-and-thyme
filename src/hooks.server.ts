// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // 🔹 For now, we don't have a real auth system wired up.
  // So just say "no logged-in user" on every request.
  event.locals.user = null;

  return resolve(event);
};
