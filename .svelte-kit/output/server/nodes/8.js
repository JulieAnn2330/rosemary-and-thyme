import * as server from '../entries/pages/recipes/new/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recipes/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/recipes/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.8YMx7Npp.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DyzAqCDJ.js","_app/immutable/chunks/Bcz0RvV-.js"];
export const stylesheets = [];
export const fonts = [];
