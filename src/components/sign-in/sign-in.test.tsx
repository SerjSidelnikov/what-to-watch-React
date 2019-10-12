import * as React from "react";
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {SignIn} from './sign-in';

describe(`SignInComponent`, () => {
  it(`should render component correctly.`, () => {
    const fun = jest.fn();
    const component = renderer.create(
        <BrowserRouter>
          <SignIn
            handleSubmit={fun}
            handleInput={fun}
          />
        </BrowserRouter>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
