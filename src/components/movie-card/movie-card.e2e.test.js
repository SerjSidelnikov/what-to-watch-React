import {mount} from 'enzyme';

import MovieCard from './movie-card';
import films from '../../moks/films';

describe(`<MovieCard/>`, () => {
  const handleClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();
  const {title, src, poster} = films[0];

  it(`Simulates pressing the card title`, () => {
    const wrapper = mount(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
          isPlaying={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
    );

    const titleLink = wrapper.find(`.small-movie-card__link`);

    titleLink.simulate(`click`, {preventDefault() {}});

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`When you hover the cursor on the card plays video.`, () => {
    const movieCard = mount(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
          isPlaying={true}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
    );

    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`mouseenter`);

    expect(handleMouseEnter).toHaveBeenCalled();
  });

  it(`When you move the cursor from the card, the video stops.`, () => {
    const movieCard = mount(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
          isPlaying={false}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
    );

    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`mouseleave`);

    expect(handleMouseLeave).toHaveBeenCalled();
  });
});
