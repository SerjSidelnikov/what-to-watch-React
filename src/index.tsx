import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {Router} from 'react-router-dom';

import App from './components/app/app';
import reducer from './reducer';
import {Operations} from './reducer/data/data';
import {createAPI} from './api';
import history from './history';

const init = () => {
  const api = createAPI();
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operations.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
