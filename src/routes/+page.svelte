<script>
  import { onMount } from 'svelte';
	import { rank } from "$lib/igrc-client/google";

  let rankResult = {};

  onMount(async () => {
		rank({
      keywords: ["efiling integration"].map(encodeURIComponent), 
      url: "www.infotrack.com"
    }).then((data) => {
      rankResult = data;
    });
	});

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1>Debug</h1>
<pre>
  {JSON.stringify(rankResult)}
</pre>