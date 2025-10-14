<form method="POST">
  <label>Username <input name="username" /></label>
  <label>Password <input type="password" name="password" /></label>
  <button type="submit">Sign Up</button>
  <button type="button" on:click={() => window.location.href='/auth/google'}>Sign Up with Google</button>
</form>
