import { p as prisma } from './db-D9xrZjJk.js';
import { r as redirect } from './index-Djsj11qr.js';
import { createClient } from '@supabase/supabase-js';
import '@prisma/client';

const PUBLIC_SUPABASE_URL = "https://cakluazpdlznqsjhcetj.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNha2x1YXpwZGx6bnFzamhjZXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODM1MDksImV4cCI6MjA3NTQ1OTUwOX0.TEcwF5vLtv-imIzn8z-EtDewR3GGiaAvruireOFQ0uU";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
const actions = {
  default: async ({ request, locals }) => {
    const session = locals.user;
    if (!session) throw redirect(303, "/login");
    const formData = await request.formData();
    const title = formData.get("title");
    const ingredients = formData.get("ingredients");
    const instructions = formData.get("instructions");
    const file = formData.get("photo");
    let imageUrl = null;
    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage.from("recipe-images").upload(fileName, file);
      if (!error) {
        const { data: publicUrlData } = supabase.storage.from("recipe-images").getPublicUrl(fileName);
        imageUrl = publicUrlData.publicUrl;
      }
    }
    await prisma.recipe.create({
      data: {
        title,
        ingredients,
        instructions,
        imageUrl,
        userId: session.id
      }
    });
    throw redirect(303, "/recipes");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DCqdK_mc.js')).default;
const server_id = "src/routes/recipes/new/+page.server.ts";
const imports = ["_app/immutable/nodes/5.CEktmaB4.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/ia1g8h7s.js","_app/immutable/chunks/ACnDxm1I.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BP4ywLji.js.map
