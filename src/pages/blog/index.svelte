<script>
  import {url} from '@sveltech/routify'
  // export let path
  $: console.log(url)
</script>

<h1>Blog page</h1>

<a href={$url('blog/machin')}>machin</a><br>
<a href={$url('blog/truc')}>truc</a><br>
<a href={$url('blog/bidule')}>bidule</a>

