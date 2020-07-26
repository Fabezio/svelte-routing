<script>
  import { url } from '@sveltech/routify'
  import Head from '../../../components/Head.svelte'
  export let slug
  // $: console.log(getCurrentPosition)
</script>

<Head head={slug} />
<!-- <h1>
{slug}</h1> -->

<a href={$url(`${slug}/more`)} >see more</a>
<a href={$url(`${slug}/likes`)} >likes</a>