import {PureComponent} from 'react';
import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import {actionCreator} from '../../reducer/reducer';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      genres: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const {films, genre, onGenreChange} = this.props;
    const {genres} = this.state;

    return (
      <Main
        movies={films}
        genres={genres}
        genre={genre}
        onClick={this.handleClick}
        onGenreChange={onGenreChange}
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
    this._getGenres(this.props.films);
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => (
  Object.assign({}, ownProps, {
    genre: state.genre,
    films: state.films,
  })
);

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (event, genre) => {
    event.preventDefault();
    dispatch(actionCreator.changeGenreFilter(genre));
    dispatch(actionCreator.getFilteredMovies(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
