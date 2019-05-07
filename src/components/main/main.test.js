import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

describe(`The application is displayed correctly.`, () => {
  it(`Main screen correctly renders after launch`, () => {
    const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
    const handleClick = jest.fn();

    const component = renderer.create(
        <Main
          movieNames={movies}
          onClick={handleClick}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
