<script>
  export let data;
</script>

<h1>All Recipes</h1>
<ul>
  {#each data.recipes as recipe}
    <li>
      {#if recipe.imageUrl}
        <img src={recipe.imageUrl} alt={recipe.title} width="100" />
      {/if}
      <strong>{recipe.title}</strong>
    </li>
  {/each}
</ul>
