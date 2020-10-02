export async function fetchMovies() {
	let response = await fetch("/data/movies");
	let data = await response.json();
	return data;
} 

export async function fetchMovieData(id) {
	let response = await fetch(`/data/movie/${id}`);
	let data = await response.json();
	return data[0];
}