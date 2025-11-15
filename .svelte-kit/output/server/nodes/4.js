import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DEX9R6NW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DyzAqCDJ.js","_app/immutable/chunks/Bcz0RvV-.js","_app/immutable/chunks/CnrV899X.js","_app/immutable/chunks/0J_xpCIS.js","_app/immutable/chunks/Hih84pwi.js","_app/immutable/chunks/T5ekKZSH.js","_app/immutable/chunks/mt1sDw3T.js","_app/immutable/chunks/DS_31K9b.js","_app/immutable/chunks/DLliyxAC.js","_app/immutable/chunks/DxICUXax.js","_app/immutable/chunks/BY9jl7ad.js","_app/immutable/chunks/DVxofn1X.js"];
export const stylesheets = [];
export const fonts = [];
