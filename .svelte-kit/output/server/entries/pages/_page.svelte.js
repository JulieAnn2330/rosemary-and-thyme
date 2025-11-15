import { w as attr, x as ensure_array_like, y as bind_props } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let noResultsMsg;
    let data = $$props["data"];
    noResultsMsg = data.q ? `No recipes yet for “${data.q}”. Try adding one!` : "No recipes yet. Try adding one!";
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="container" style="max-width:900px;margin:2rem auto;padding:0 1rem;"><header style="display:flex;align-items:center;gap:1rem;justify-content:space-between;"><h1 style="margin:0;">🍳 Recipes</h1> <button>${escape_html("Add Recipe")}</button></header> <form method="GET" style="margin:1rem 0;"><input name="q" placeholder="Search by title or description…"${attr("value", data.q)} style="width:100%;padding:.6rem .8rem;border:1px solid #ddd;border-radius:.5rem;"/></form> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.recipes.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p>${escape_html(noResultsMsg)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<ul style="list-style:none;padding:0;margin:1rem 0;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;"><!--[-->`);
      const each_array = ensure_array_like(data.recipes);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let r = each_array[$$index];
        $$renderer2.push(`<li style="border:1px solid #eee;border-radius:.75rem;padding:1rem;"><a${attr("href", `/recipe/${r.id}`)} style="text-decoration:none;color:inherit;"><h3 style="margin:.2rem 0 0;">${escape_html(r.title)}</h3> `);
        if (r.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p style="color:#666;margin:.3rem 0 0;">${escape_html(r.description)}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <small style="color:#999;">${escape_html(new Date(r.createdAt).toLocaleDateString())}</small></a></li>`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
