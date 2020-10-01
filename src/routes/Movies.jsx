import React, { useState, useEffect } from "react";
import "./Movies.css";

export default function Movies() {
	const [ movieData, setMovieData ] = useState([])

	useEffect(() => {
		fetchMovies().then(data => setMovieData(data));
	}, [])

	async function fetchMovies() {
		let response = await fetch("/data/movies");
		let data = await response.json();
		return data;
	} 

	return (
		<div>
			<div className="row row-cols-4" style={{gridGrap: 10}}>
				{
					movieData.map(data => (
						<div className="movie-poster-img">
						{/* Implement <Link to={id}> */}
						<img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.id} key={data.id}
							className="shadow p-3 mb-5 bg-white rounded img-fluid" />
						</div>
					))
				}
			</div>
		</div>
	)
}