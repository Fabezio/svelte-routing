<script>
  import { route } from "@sveltech/routify";
  import Head from '../components/Head.svelte'
  console.log("route", $route);
</script>

<Head head="404: missing" />

<!-- <h1>404: missing</h1> -->
<p>The path <code>{$route.leftover}</code> was not found.</p>
