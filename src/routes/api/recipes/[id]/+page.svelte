<script lang="ts">
  export let data: {
    recipe: {
      id: string;
      title: string;
      description?: string | null;
      ingredients: string[];
      instructions: string[];
      createdAt: string;
    } | null;
  };
</script>

<div style="max-width:800px;margin:2rem auto;padding:0 1rem;">
  {#if !data.recipe}
    <p>Recipe not found.</p>
    <a href="/">← Back</a>
  {:else}
    <a href="/">← Back</a>
    <h1 style="margin:.5rem 0 0;">{data.recipe.title}</h1>
    {#if data.recipe.description}<p style="color:#666;">{data.recipe.description}</p>{/if}

    <section style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:1.5rem;">
      <div>
        <h3>Ingredients</h3>
        <ul>
          {#each data.recipe.ingredients as ing}
            <li>{ing}</li>
          {/each}
        </ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <ol>
          {#each data.recipe.instructions as step}
            <li style="margin:.4rem 0;">{step}</li>
          {/each}
        </ol>
      </div>
    </section>
  {/if}
</div>
