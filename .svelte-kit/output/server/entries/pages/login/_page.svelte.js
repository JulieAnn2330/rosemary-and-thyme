import "clsx";
function _page($$renderer) {
  $$renderer.push(`<form method="POST"><label>Username <input name="username"/></label> <label>Password <input type="password" name="password"/></label> <button type="submit">Log In</button> <button type="button">Login with Google</button></form>`);
}
export {
  _page as default
};
