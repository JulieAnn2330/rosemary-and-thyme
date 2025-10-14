<script>
  let file;
</script>

<form method="POST" enctype="multipart/form-data">
  <label>Title <input name="title" required /></label>
  <label>Ingredients <textarea name="ingredients"></textarea></label>
  <label>Instructions <textarea name="instructions"></textarea></label>
  <label>Photo <input type="file" name="photo" bind:files={file} /></label>
  <button type="submit">Save</button>
</form>
