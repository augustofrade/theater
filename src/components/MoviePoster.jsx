import React from "react";
import { Link } from "react-router-dom";
import "./MoviePoster.css";

export default function MoviePoster(props) {
	let { title } = props;

	title = title.substring(0, 25);

	return (
		<div className={"movie-poster-cntr " + props.animation}>
		<Link to={"movie/"+props.id}>
			<div className="movie-poster-title"><span>{title}</span></div>
			<img src={`http://image.tmdb.org/t/p/w500${props.src}`} alt={props.id}
				className="movie-poster-img shadow p-3 mb-5 bg-white rounded img-fluid" />
		</Link>
		</div>
	)
}