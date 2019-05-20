import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app/app';
import {reducer} from './reducer/reducer';

const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
