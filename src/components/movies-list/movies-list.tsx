import * as React from "react";

import MovieCard from '../movie-card/movie-card';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const MovieCardWithActive = withActiveCard(MovieCard);

const MoviesList = ({movies, onClick}) => {
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    'id': PropTypes.number.isRequired,
    'name': PropTypes.string.isRequired,
    'preview_video_link': PropTypes.string.isRequired,
    'poster_image': PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [{'id': 0, 'name': ``, 'preview_video_link': ``, 'poster_image': ``}],
  onClick: () => {},
};

export default MoviesList;
