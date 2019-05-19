import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app/app';
import {reducer} from './reducer/reducer';

const init = () => {
  // const store = createStore(reducer);
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
