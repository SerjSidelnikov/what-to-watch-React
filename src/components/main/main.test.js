import renderer from 'react-test-renderer';

import Main from './main';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`Main screen correctly renders after launch`, () => {
    const handleClick = jest.fn();
    const onGenreChange = jest.fn();
    const genres = films.map((movie) => movie.genre);

    const component = renderer.create(
        <Main
          movies={films}
          genres={genres}
          genre={`All genres`}
          onClick={handleClick}
          onGenreChange={onGenreChange}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
