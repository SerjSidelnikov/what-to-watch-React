import MovieCard from '../movie-card/movie-card';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const MovieCardWithActive = withActiveCard(MovieCard);

const MoviesList = ({movies, onClick}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => (
        <MovieCardWithActive
          key={`${movie.title}-${index}`}
          title={movie.title}
          src={movie.src}
          poster={movie.poster}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
