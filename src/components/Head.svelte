<script>
  export let head = "page title"
</script>

<svelte:head>
  <title>Svelte Routing Examples - {head}</title>
</svelte:head>

<h1>Svelte Routing Examples</h1>
<h2>{head}</h2>

<style>
h1, h2 {
  text-align: center;
}
h1 {
  text-transform: uppercase;
  font-size: 3.5rem;
}
h2 {
  font-variant: small-caps;
  text-transform: capitalize;
  font-size: 3rem;
}
</style>