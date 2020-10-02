import React, { useState, useEffect } from "react";
import MoviePoster from "../components/MoviePoster";
import Loading from "../components/Loading";
import { fetchMovies } from "../api/movieAPI";

export default function Movies() {
	const [ movieData, setMovieData ] = useState()

	useEffect(() => {
		fetchMovies().then(data => setMovieData(data));
	}, [])

	

	return (
		<div>
			<h2 className="display-4">Available movies</h2>
			{!movieData && <Loading />}
			<div className="row row-cols-4" style={{gridGrap: 10}}>
				{movieData &&
					movieData.map(data => (
						<MoviePoster src={data.poster_path} id={data.id} key={data.id} title={data.title} />
					))
				}
			</div>
		</div>
	)
}