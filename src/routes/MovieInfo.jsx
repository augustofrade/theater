import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieSuggestions from "../components/MovieSuggestions";
import { fetchMovieData, fetchRandomMovies } from "../api/movieAPI";
import "./MovieInfo.css";
import TheatersIcon from '@material-ui/icons/Theaters';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function MovieInfo() {
	const [ movieData, setMovieData ] = useState({});
	const [ recommendedData, setRecommendedData ] = useState();
	const { id } = useParams();;

	function formatMovieRuntime(runtime) {
		let hours = Math.floor(runtime / 60);
		let minutes = runtime - hours * 60;
		if(minutes < 10) minutes = `0${minutes}`
		return `${hours}h${minutes}min`
	}

	useEffect(() => {
		fetchMovieData(id).then(data => {
			data.runtime = formatMovieRuntime(data.runtime)
			setMovieData(data);
			console.log(data);
		});
		window.scrollTo(0, 0);

		fetchRandomMovies(5).then(data => {
			setRecommendedData(data);
		});
	}, [])

	return (
		<React.Fragment>
			{ !movieData && <Loading /> }
			{movieData &&
				<React.Fragment>
					<div className="backdrop-cntr">
						<img src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
							loading="lazy" className="img-fluid movie-backdrop" />
						<h2 className="movie-title display-4">{movieData.title}</h2>
					</div>
					<div className="card movie-length">
						<div className="card-body" style={{width: "18rem"}}>
							<TheatersIcon />
							<span>{movieData.runtime}</span>
						</div>
					</div>
					<div className="movie-data">
						<h3>Synopsis</h3>
						<p className="lead" style={{textAlign: "justify"}}>{movieData.overview}</p>
						<h3>Genres</h3>
						<div className="row row-cols-2">
							{movieData.genres &&
								movieData.genres.map(({ id, name }) => (
									<p key={id} className="movie-genre"><ArrowRightIcon /><span className="lead">{name}</span></p>
								))
							}
						</div>
					</div>
				</React.Fragment>
			}
			{ recommendedData && <MovieSuggestions movies={recommendedData} /> }
		</React.Fragment>
	)
}