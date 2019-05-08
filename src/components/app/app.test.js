import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

describe(`The application is displayed correctly.`, () => {
  it(`App correctly renders after launch`, () => {
    const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

    const component = renderer.create(
        <App
          movieNames={movies}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
