import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app';
import reducer from './reducer';
import {createAPI} from './api';
import {Operations} from './reducer/data/data';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
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
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
