import {connect} from 'react-redux';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {ActionCreator as UserActionCreator, Operation} from '../../reducer/user/user';
import {getActiveGenre, getGenres, getFilteredFilms} from '../../reducer/data/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import withTitleClick from '../../hocs/with-title-click/with-title-click';
import withFormData from '../../hocs/with-form-data/with-form-data';

const MainWith = withTitleClick(Main);
const SignInWith = withFormData(SignIn);

const App = ({films, genres, activeGenre, onGenreChange, isAuthorizationRequired, onSignInSubmit}) => {
  if (!isAuthorizationRequired) {
    return (
      <SignInWith onSubmit={onSignInSubmit}/>
    );
  }

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
  isAuthorizationRequired: PropTypes.bool.isRequired,
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
  onGenreChange: DataActionCreator.changeActiveGenre,
  onSignInSubmit: Operation.sendUserData,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
