<script lang="ts">
	const { data } = $props();

	const trackSearchQuery = `${data.trackName} ${data.artistName}`;
	const trackReleaseYear = data.trackName ? data.releaseDate.split("-")[0] : "0";
</script>

<svelte:head>
	<title>{data.trackName}</title>
	<link rel="icon" type="image/x-icon" href={data.artworkUrl60} />
	<meta
		name="description"
		content={`${data.artistName}
            ${data.collectionName} 
            ${data.primaryGenreName} &bull; ${trackReleaseYear}
        `}
	/>
	<meta name="og:image" content={data.artworkUrl100} />
</svelte:head>

{#if data.trackName}
	<div class="grid grid-cols-[max-content,1fr] items-center gap-4">
		<img class="size-32 rounded" src={data.artworkUrl100} alt={`${data.trackName} album cover`} />
		<hgroup>
			<h2 class="m-0">{data.trackName}</h2>
			<p class="m-0">{data.artistName}</p>
			<p class="m-0">{data.collectionName}</p>
			<p class="m-0">{data.primaryGenreName} &bull; {trackReleaseYear}</p>
		</hgroup>
	</div>

	<div>
		<audio controls>
			<source src={data.previewUrl} type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>

	<h3 class="mb-3">Find on</h3>

	{#snippet platformButton(name: string, url: string)}
		<a
			href={`${url}${trackSearchQuery}`}
			target="_blank"
			class="block rounded-md bg-emerald-500 px-3 py-2 text-sm text-white hover:-translate-y-px"
		>
			<button>{name}</button>
		</a>
	{/snippet}

	<div class="flex flex-wrap gap-2">
		{@render platformButton("Spotify", "https://open.spotify.com/search/")}
		{@render platformButton("Apple Music", "https://music.apple.com/us/search?term=")}
		{@render platformButton("YouTube Music", "https://music.youtube.com/search?q=")}
		{@render platformButton("YouTube", "https://www.youtube.com/results?search_query=")}
		{@render platformButton("SoundCloud", "https://soundcloud.com/search?q=")}
		{@render platformButton("Deezer", "https://www.deezer.com/search/")}
	</div>
{:else}
	<h2>No song found :(</h2>
{/if}
