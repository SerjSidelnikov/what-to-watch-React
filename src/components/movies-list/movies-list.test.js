import renderer from 'react-test-renderer';

import MoviesList from './movies-list';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`MoviesList screen correctly renders after launch`, () => {
    const handleClick = jest.fn();

    const component = renderer.create(
        <MoviesList
          movies={films}
          onClick={handleClick}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
