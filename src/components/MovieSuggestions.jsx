import React from "react";
import "./MovieSuggestions.css";
import MoviePoster from "./MoviePoster";

export default function MovieSuggestions({ movies }) {
	


	return (
			<section className="recommended-section">
				<h2 className="recommended-title">Suggestions just for you</h2>
				<div className="row row-cols-5">
					{
						movies.map((movie, i) => (
							<MoviePoster src={movie.poster_path} id={movie.id} key={i}
							title={movie.title} />)
						)
					}
				</div>
			</section>

	)
}