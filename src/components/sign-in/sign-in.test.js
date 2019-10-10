import renderer from 'react-test-renderer';

import SignIn from './sign-in';

describe(`SignInComponent`, () => {
  it(`should render component correctly.`, () => {
    const fun = jest.fn();
    const component = renderer.create(
        <SignIn
          handleSubmit={fun}
          handleInput={fun}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
