import {PureComponent} from 'react';

import MovieCard from '../movie-card/movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null,
    };
  }

  handleActiveMovie(movie) {
    this.setState({
      activeMovie: movie,
    });
  }

  render() {
    const {movies, onClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={`movie-${index}`}
            title={movie.title}
            src={movie.src}
            onClick={onClick}
            onActiveMovie={this.handleActiveMovie.bind(this, movie)}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
