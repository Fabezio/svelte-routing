<script>
  import Nav from '../components/Nav.svelte'
  $: console.log(document)
</script>

<main>
  <Nav />
  <slot />
</main>