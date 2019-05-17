import MovieCard from '../movie-card/movie-card';

const MoviesList = ({movies, onClick}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={`movie-${index}`}
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
