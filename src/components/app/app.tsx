import * as React from "react";
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';

import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {Operation} from '../../reducer/user/user';
import {getActiveGenre, getGenres, getFilteredFilms} from '../../reducer/data/selectors';
import {getUserData} from '../../reducer/user/selectors';

import withTitleClick from '../../hocs/with-title-click/with-title-click';
import withFormData from '../../hocs/with-form-data/with-form-data';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';

import {Film, accountData, SignInData} from "../../types";

const MainWith = withTitleClick(Main);
const SignInWith = withFormData(SignIn);
const MyListWith = withPrivateRoute(MyList);

interface Props {
  films: Film[],
  genres: string[],
  activeGenre: string,
  userData: accountData,
  onGenreChange: () => void,
  onSignInSubmit: (data: SignInData) => void,
}

const App = ({films, genres, activeGenre, onGenreChange, userData, onSignInSubmit}: Props) => {

  return (
    <Switch>
      <Route path={`/`} exact render={() => (
        <MainWith
          movies={films}
          genres={genres}
          activeGenre={activeGenre}
          onGenreChange={onGenreChange}
          userData={userData}
        />
      )}/>

      <Route path={`/login`} render={() => <SignInWith onSubmit={onSignInSubmit}/>}/>
      <Route path={`/my-list`} component={MyListWith}/>
    </Switch>
  );
};

const mapStateToProps = (state, ownProps) => (
  Object.assign({}, ownProps, {
    films: getFilteredFilms(state),
    genres: getGenres(state),
    activeGenre: getActiveGenre(state),
    userData: getUserData(state),
  })
);

const mapDispatchToProps = {
  onGenreChange: DataActionCreator.changeActiveGenre,
  onSignInSubmit: Operation.sendUserData,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
