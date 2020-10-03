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

export async function fetchRandomMovies(amount) {
	let response = await fetch("/data/movies");
	let data = await response.json();
	let random = [];
	for(let m = 0; m < amount; m++)
		random.push(data[Math.floor(Math.random() * data.length)])

	return random
}