<script lang="ts">
  import { enhance } from '$app/forms';

  export let data: {
    recipes: Array<{ id: string; title: string; description?: string | null; createdAt: string }>;
    q: string;
  };

  let showForm = false;
  let isSaving = false;
  let toastMessage: string | null = null;
  let toastTimeout: NodeJS.Timeout | null = null;

  // type-safe enhance handler
  const onEnhancedSubmit = ({ formElement }: { formElement: HTMLFormElement }) => {
    isSaving = true;

    return async ({
      result,
      update
    }: {
      result: { type: 'success' | 'failure' | 'redirect' | 'error'; data?: unknown };
      update: () => Promise<void>;
    }) => {
      try {
        if (result.type === 'success') {
          showForm = false;
          formElement.reset();
          await update(); // refresh recipe list
          showToast('✅ Recipe saved!');
        } else if (result.type === 'failure') {
          console.error('Form error:', result.data);
          showToast('❌ Error saving recipe.');
        }
      } finally {
        isSaving = false;
      }
    };
  };

  function showToast(message: string) {
    toastMessage = message;
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastMessage = null;
    }, 2500);
  }

  $: noResultsMsg = data.q
    ? `No recipes yet for “${data.q}”. Try adding one!`
    : 'No recipes yet. Try adding one!';
</script>

<!-- Toast notification -->
{#if toastMessage}
  <div
    style="
      position:fixed;
      bottom:1.5rem;
      left:50%;
      transform:translateX(-50%);
      background:#333;
      color:#fff;
      padding:0.75rem 1.25rem;
      border-radius:0.5rem;
      font-size:0.9rem;
      box-shadow:0 2px 6px rgba(0,0,0,0.2);
      z-index:1000;
      transition:opacity .3s ease;
    "
  >
    {toastMessage}
  </div>
{/if}

<div class="container" style="max-width:900px;margin:2rem auto;padding:0 1rem;">
  <header style="display:flex;align-items:center;gap:1rem;justify-content:space-between;">
    <h1 style="margin:0;">🍳 Recipes</h1>
    <button on:click={() => (showForm = !showForm)}>
      {showForm ? 'Close' : 'Add Recipe'}
    </button>
  </header>

  <!-- search -->
  <form method="GET" style="margin:1rem 0;">
    <input
      name="q"
      placeholder="Search by title or description…"
      value={data.q}
      style="width:100%;padding:.6rem .8rem;border:1px solid #ddd;border-radius:.5rem;"
    />
  </form>

  <!-- add form -->
  {#if showForm}
    <form
      method="POST"
      action="?/create"
      use:enhance={onEnhancedSubmit}
      aria-busy={isSaving}
      style="border:1px solid #eee;padding:1rem;border-radius:.75rem;margin:1rem 0;display:grid;gap:.75rem;"
    >
      <label>
        <b>Title</b><br />
        <input
          name="title"
          required
          style="width:100%;padding:.5rem;border:1px solid #ddd;border-radius:.5rem;"
        />
      </label>

      <label>
        <b>Description</b><br />
        <input
          name="description"
          style="width:100%;padding:.5rem;border:1px solid #ddd;border-radius:.5rem;"
        />
      </label>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        <label>
          <b>Ingredients</b><br />
          <textarea
            name="ingredients"
            rows="6"
            placeholder="One per line"
            style="width:100%;padding:.5rem;border:1px solid #ddd;border-radius:.5rem;"
          ></textarea>
        </label>

        <label>
          <b>Instructions</b><br />
          <textarea
            name="instructions"
            rows="6"
            placeholder="One step per line"
            style="width:100%;padding:.5rem;border:1px solid #ddd;border-radius:.5rem;"
          ></textarea>
        </label>
      </div>

      <button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving…' : 'Save'}
      </button>
    </form>
  {/if}

  <!-- recipe list -->
  {#if data.recipes.length === 0}
    <p>{noResultsMsg}</p>
  {:else}
    <ul
      style="list-style:none;padding:0;margin:1rem 0;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;"
    >
      {#each data.recipes as r}
        <li style="border:1px solid #eee;border-radius:.75rem;padding:1rem;">
          <a href={`/recipe/${r.id}`} style="text-decoration:none;color:inherit;">
            <h3 style="margin:.2rem 0 0;">{r.title}</h3>
            {#if r.description}
              <p style="color:#666;margin:.3rem 0 0;">{r.description}</p>
            {/if}
            <small style="color:#999;">{new Date(r.createdAt).toLocaleDateString()}</small>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>