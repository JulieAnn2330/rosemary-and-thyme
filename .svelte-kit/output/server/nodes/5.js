import * as server from '../entries/pages/api/recipes/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/recipes/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/api/recipes/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BDAJRd7U.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DyzAqCDJ.js","_app/immutable/chunks/Bcz0RvV-.js","_app/immutable/chunks/CnrV899X.js","_app/immutable/chunks/0J_xpCIS.js","_app/immutable/chunks/Hih84pwi.js","_app/immutable/chunks/T5ekKZSH.js","_app/immutable/chunks/mt1sDw3T.js","_app/immutable/chunks/DLliyxAC.js"];
export const stylesheets = [];
export const fonts = [];
