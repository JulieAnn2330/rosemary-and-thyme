import { p as prisma } from './db-D9xrZjJk.js';
import '@prisma/client';

async function load() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: "desc" } });
  return { recipes };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DtmqJS9c.js')).default;
const server_id = "src/routes/recipes/+page.server.ts";
const imports = ["_app/immutable/nodes/4.Dc-ya-TU.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/ia1g8h7s.js","_app/immutable/chunks/ACnDxm1I.js","_app/immutable/chunks/Cwp81dEq.js","_app/immutable/chunks/Wq_yPFHN.js","_app/immutable/chunks/H9urRHzg.js","_app/immutable/chunks/CHhUIpAb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-9JJ6Pri6.js.map
