import {connect} from 'react-redux';

import Main from '../main/main.jsx';
import {ActionCreator} from '../../reducer/data/data';
import {getActiveGenre, getGenres, getFilteredFilms} from '../../reducer/data/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import withTitleClick from '../../hocs/with-title-click/with-title-click';

const MainWith = withTitleClick(Main);

const App = ({films, genres, activeGenre, onGenreChange}) => {
  return (
    <MainWith
      movies={films}
      genres={genres}
      activeGenre={activeGenre}
      onGenreChange={onGenreChange}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => (
  Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getGenres(state),
    activeGenre: getActiveGenre(state),
    isAuthorizationRequired: getAuthorizationStatus(state),
  })
);

const mapDispatchToProps = {
  onGenreChange: ActionCreator.changeActiveGenre,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
