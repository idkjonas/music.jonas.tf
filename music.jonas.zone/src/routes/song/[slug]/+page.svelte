<script lang="ts">
	const { data } = $props();

	const searchQuery = `${data.trackName} ${data.artistName}`;
</script>

<svelte:head>
	<title>{data.trackName}</title>
	<link rel="icon" type="image/x-icon" href={data.artworkUrl60} />
	<meta
		name="description"
		content={`${data.collectionName} ${data.primaryGenreName} &bull; ${data.releaseYear}`}
	/>
	<meta name="og:image" content={data.artworkUrl100} />
</svelte:head>

<h2 class="text-3xl font-medium">{data.trackName}</h2>
<p>{data.artistName}</p>

<div>
	<img src={data.artworkUrl100} alt={`${data.trackName} album cover`} />
</div>

<h3>Preview</h3>
<div>
	<audio controls>
		<source src={data.previewUrl} type="audio/mpeg" />
		Your browser does not support the audio element.
	</audio>
</div>

<h3>Find on</h3>

{#snippet platformButton(name: string, url: string)}
	<a
		href={`${url}${searchQuery}`}
		target="_blank"
		class="bg-blue-500 text-white px-2 py-1 block hover:opacity-50 rounded"
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
