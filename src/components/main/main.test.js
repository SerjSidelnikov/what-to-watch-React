import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

describe(`The application is displayed correctly.`, () => {
  it(`Main screen correctly renders after launch`, () => {
    const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

    const component = renderer.create(
        <Main
          movieNames={movies}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
