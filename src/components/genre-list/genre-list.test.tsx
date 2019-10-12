import * as React from "react";
import * as renderer from 'react-test-renderer';

import GenreList from './genre-list';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`GenreList screen correctly renders after launch`, () => {
    const handleClick = jest.fn();
    const genres = films.map((movie) => movie.genre);

    const component = renderer.create(
        <GenreList
          genres={genres}
          activeGenre={`All genres`}
          onClick={handleClick}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
