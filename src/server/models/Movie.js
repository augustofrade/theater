const mongoose = require("../database");

const MovieSchema = new mongoose.Schema({
	title: {
		type: String
	},
	id: {
		type: String
	},
	overview: {
		type: String
	},
	runtime: {
		type: String
	},
	release_date: {
		type: String
	},
	vote_average: {
		type: String
	},
	genres: {
		type: Object
	},
	adult: {
		type: String
	},
	backdrop_path: {
		type: String
	},
	poster_path: {
		type: String
	}
})

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;