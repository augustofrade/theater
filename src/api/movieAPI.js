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
	while(random.length !== 5) {
		let movie = data[Math.floor(Math.random() * data.length)]
		if(random.indexOf(movie) === -1)
			random.push(movie)
	}

	return random
}