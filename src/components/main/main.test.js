import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Main from './main';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`Main screen correctly renders after launch`, () => {
    const handleClick = jest.fn();
    const onGenreChange = jest.fn();
    const genres = films.map((movie) => movie.genre);

    const component = renderer.create(
        <BrowserRouter>
          <Main
            movies={films}
            genres={genres}
            genre={`All genres`}
            onClick={handleClick}
            onGenreChange={onGenreChange}
          />
        </BrowserRouter>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
