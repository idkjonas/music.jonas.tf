export async function load({ params }) {
	const url = `https://itunes.apple.com/search?term=${params.slug}&media=music&entity=song&limit=1`;
	const response = await (await fetch(url)).json();
	return response.results[0];
}
