import React from "react";
import { PropTypes } from "prop-types";

import MovieRow from "./movie-row";

import { movieType } from "../../common/shared";
import { MoviesListView } from "./styles";

function MovieList(Props) {
  const { movies } = Props;

  return (
    <MoviesListView>
      {movies.map((movie) => {
        return <MovieRow key={movie.id} id={movie.id} name={movie.name} />;
      })}
    </MoviesListView>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      ...movieType,
    })
  ),
};

export default MovieList;
