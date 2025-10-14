<form method="POST">
  <label>Username <input name="username" /></label>
  <label>Password <input type="password" name="password" /></label>
  <button type="submit">Log In</button>
  <button type="button" on:click={() => window.location.href='/auth/google'}>Login with Google</button>
</form>
