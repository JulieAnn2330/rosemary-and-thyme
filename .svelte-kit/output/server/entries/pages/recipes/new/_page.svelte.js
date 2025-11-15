import "clsx";
function _page($$renderer) {
  $$renderer.push(`<form method="POST" enctype="multipart/form-data"><label>Title <input name="title" required/></label> <label>Ingredients <textarea name="ingredients"></textarea></label> <label>Instructions <textarea name="instructions"></textarea></label> <label>Photo <input type="file" name="photo"/></label> <button type="submit">Save</button></form>`);
}
export {
  _page as default
};
