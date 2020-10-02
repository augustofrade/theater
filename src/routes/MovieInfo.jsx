import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchMovieData } from "../api/movieAPI";

export default function MovieInfo() {
	const [ movieData, setMovieData ] = useState({})
	const { id } = useParams();

	useEffect(() => {
		fetchMovieData(id).then(data => setMovieData(data))
	}, [])

	return (
		<React.Fragment>
			{ !movieData && <Loading /> }
			{movieData &&
				<div>
					<img src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`} className="img-fluid" />
				</div>
			}
		</React.Fragment>
	)
}