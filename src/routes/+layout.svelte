<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";
	let { children } = $props();

	let query = $state("");
</script>

<header class="mb-4">
	<div class="mb-4 flex items-center gap-4 text-2xl">
		<span class="animate-spin">💿</span>
		<a href="/" class=" hover:underline">
			<h1>music.jonas.tf</h1>
		</a>
	</div>
	<search>
		<form action={`/song/${query}`} class="flex gap-2">
			<input
				type="text"
				required
				bind:value={query}
				class="grow rounded-md border bg-white px-3 py-2 outline-none focus:ring dark:border-slate-700 dark:bg-slate-800"
			/>
			<input
				type="submit"
				value="Search"
				class="block cursor-pointer rounded-md bg-emerald-500 px-3 py-2 text-sm text-white hover:-translate-y-px"
			/>
		</form>
	</search>
</header>

{#key $page}
	<main in:fly={{ y: 10 }} class="prose dark:prose-invert">
		{@render children()}
	</main>
{/key}
