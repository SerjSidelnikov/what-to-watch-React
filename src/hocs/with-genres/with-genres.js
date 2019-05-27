import {PureComponent} from 'react';

const withGenres = (Component) => {
  class WithGenres extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        genres: [],
      };
    }

    render() {
      const {genres} = this.state;

      return (
        <Component
          {...this.props}
          genres={genres}
        />
      );
    }

    _getGenres(films) {
      const movieGenres = films.map((movie) => movie.genre);

      this.setState({
        genres: [...new Set(movieGenres)],
      });
    }

    componentWillMount() {
      this._getGenres(this.props.movies);
    }
  }

  WithGenres.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return WithGenres;
};

export default withGenres;
