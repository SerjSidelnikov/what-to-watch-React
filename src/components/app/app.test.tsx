import * as React from "react";
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';

import App from './app';
import reducer from '../../reducer';

describe(`The application is displayed correctly.`, () => {
  it(`App correctly renders after launch`, () => {
    const store = createStore(reducer);

    const component = renderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
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
