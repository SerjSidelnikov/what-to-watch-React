import {connect} from 'react-redux';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {Operation} from '../../reducer/user/user';
import {getActiveGenre, getGenres, getFilteredFilms} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import withTitleClick from '../../hocs/with-title-click/with-title-click';
import withFormData from '../../hocs/with-form-data/with-form-data';

const MainWith = withTitleClick(Main);
const SignInWith = withFormData(SignIn);

const App = ({films, genres, activeGenre, onGenreChange, isAuthorizationRequired, userData, onSignInSubmit}) => {
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
      userData={userData}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onSignInSubmit: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    'id': PropTypes.number,
    'email': PropTypes.string,
    'name': PropTypes.string,
    'avatar_url': PropTypes.string,
  }),
};

const mapStateToProps = (state, ownProps) => (
  Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getGenres(state),
    activeGenre: getActiveGenre(state),
    isAuthorizationRequired: getAuthorizationStatus(state),
    userData: getUserData(state),
  })
);

const mapDispatchToProps = {
  onGenreChange: DataActionCreator.changeActiveGenre,
  onSignInSubmit: Operation.sendUserData,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
