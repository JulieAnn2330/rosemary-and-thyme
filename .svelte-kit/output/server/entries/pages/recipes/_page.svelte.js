import { x as ensure_array_like, w as attr, y as bind_props } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    $$renderer2.push(`<h1>All Recipes</h1> <ul><!--[-->`);
    const each_array = ensure_array_like(data.recipes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let recipe = each_array[$$index];
      $$renderer2.push(`<li>`);
      if (recipe.imageUrl) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", recipe.imageUrl)}${attr("alt", recipe.title)} width="100"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <strong>${escape_html(recipe.title)}</strong></li>`);
    }
    $$renderer2.push(`<!--]--></ul>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
