<script>
  import {url} from '@sveltech/routify'
  import Head from '../../components/Head.svelte'
  // export let path
  $: console.log(url)
</script>

<Head head="Blog page" />

<a href={$url('blog/machin')}>machin</a><br>
<a href={$url('blog/truc')}>truc</a><br>
<a href={$url('blog/bidule')}>bidule</a>

