import { v as slot } from "../../../chunks/index2.js";
function _layout($$renderer, $$props) {
  $$renderer.push(`<nav><a href="/">Home</a> <a href="/recipes">Recipes</a> <a href="/recipes/new">Add Recipe</a> <a href="/login">Login</a> <a href="/signup">Sign Up</a></nav> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]-->`);
}
export {
  _layout as default
};
