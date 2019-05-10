import renderer from 'react-test-renderer';

import MovieCard from './movie-card';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`MovieCard screen correctly renders after launch`, () => {
    const handleClick = jest.fn();
    const handleActiveMovie = jest.fn();
    const {title, src} = films[0];

    const component = renderer.create(
        <MovieCard
          title={title}
          src={src}
          onClick={handleClick}
          onActiveMovie={handleActiveMovie}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
