const Movie = require("../models/Movie");
const axios = require("axios");

function fetchData(id) {
	axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b776f7e8a583a01cba1cb9da2b0269eb`)
	.then(({data}) => {
		if(!Movie.findOne(data)) {
			Movie.create(data)
			console.log(`"${data.title}" added to database`)
		}
	})
}

const movies = [ 10515, 372058, 122, 537061, 324857, 1891, 128, 18491, 299534, 105, 299536, 10098, 185, 354912, 11, 320288, 603,
149871, 12445, 348, 539885, 337401, 594328, 475557, 454626, 420818, 616803, 474350, 333339, 181812, 679, 8077 ]

movies.forEach(id =>fetchData(id))