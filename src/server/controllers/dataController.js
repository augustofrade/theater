const router = require("express").Router();
const Movie = require("../models/Movie");

router.get("/movies", async (req, res) => {
	res.send(await Movie.find({}));
})

router.get("/movie/:id", async (req, res) => {
	const { id } = req.params;
	const movie = await Movie.find({ id });
	if(movie) 
		return res.send(movie);
	res.status(400).send({error: "Invalid movie Id"})
})

router.get("/genre/:genre", async (req, res) => {
	const { genre } = req.params;
	let movies = await Movie.find();

	movies = movies.filter(movie => {
		let hasGenre = movie.genres.filter(g => g.id == genre );
		return hasGenre.length !== 0
	})
	res.send(movies)
})



module.exports = app => app.use("/data", router) 