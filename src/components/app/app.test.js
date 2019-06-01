import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';

import App from './app';
import reducer from '../../reducer';

describe(`The application is displayed correctly.`, () => {
  it(`App correctly renders after launch`, () => {
    const store = createStore(reducer);

    const component = renderer.create(
        <Provider store={store}>
          <App/>
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
