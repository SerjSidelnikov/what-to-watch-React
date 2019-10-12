import * as React from "react";

import MovieCard from '../movie-card/movie-card';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

import {Film} from "../../types";

const MovieCardWithActive = withActiveCard(MovieCard);

interface Props {
  movies: Film[],
  onClick: () => void,
}

const MoviesList = ({movies, onClick}: Props) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <MovieCardWithActive
          key={movie.id}
          title={movie.name}
          src={movie[`preview_video_link`]}
          poster={movie[`poster_image`]}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default MoviesList;
