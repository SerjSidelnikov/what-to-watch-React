import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import {actionCreator} from '../../reducer/reducer';
import withGenre from '../../hocs/with-genres/with-genres';
import withTitleClick from '../../hocs/with-title-click/with-title-click';

const MainWith = withTitleClick(withGenre(Main));

const App = ({films, genre, onGenreChange}) => {
  return (
    <MainWith
      movies={films}
      genre={genre}
      onGenreChange={onGenreChange}
    />
  );
};

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
