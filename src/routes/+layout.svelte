<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";
	let { children } = $props();

	let query = $state("");
	let isLoading = $state(false);
</script>

<header class="mb-4">
	<a href="/" class="font-mono text-2xl block mb-4 hover:underline">
		<h1>music.jonas.zone</h1>
	</a>
	<search>
		<form action={`/song/${query}`} class="flex gap-2" onsubmit={() => (isLoading = true)}>
			<input type="text" bind:value={query} class="border grow" />
			<input type="submit" value="search" class="bg-blue-500 px-2 text-white shadow" />
		</form>
	</search>
</header>

{#key $page}
	<main in:fly={{ y: 10 }}>
		{@render children()}
	</main>
{/key}
