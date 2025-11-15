import { x as ensure_array_like, y as bind_props } from "../../../../../chunks/index2.js";
import { e as escape_html } from "../../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<div style="max-width:800px;margin:2rem auto;padding:0 1rem;">`);
    if (!data.recipe) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p>Recipe not found.</p> <a href="/">← Back</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<a href="/">← Back</a> <h1 style="margin:.5rem 0 0;">${escape_html(data.recipe.title)}</h1> `);
      if (data.recipe.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p style="color:#666;">${escape_html(data.recipe.description)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <section style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:1.5rem;"><div><h3>Ingredients</h3> <ul><!--[-->`);
      const each_array = ensure_array_like(data.recipe.ingredients);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let ing = each_array[$$index];
        $$renderer2.push(`<li>${escape_html(ing)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div> <div><h3>Instructions</h3> <ol><!--[-->`);
      const each_array_1 = ensure_array_like(data.recipe.instructions);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let step = each_array_1[$$index_1];
        $$renderer2.push(`<li style="margin:.4rem 0;">${escape_html(step)}</li>`);
      }
      $$renderer2.push(`<!--]--></ol></div></section>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
