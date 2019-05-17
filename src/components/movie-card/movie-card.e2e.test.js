import {shallow, mount} from 'enzyme';

import MovieCard from './movie-card';
import films from '../../moks/films';

describe(`<MovieCard/>`, () => {
  const handleClick = jest.fn();
  const {title, src, poster} = films[0];

  it(`Simulates pressing the card title`, () => {
    const wrapper = shallow(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
        />
    );

    const titleLink = wrapper.find(`.small-movie-card__link`);

    titleLink.simulate(`click`, {preventDefault() {}});

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`When you hover the cursor on the card plays video.`, () => {
    jest.useFakeTimers();

    const movieCard = shallow(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
        />
    );

    expect(movieCard.state(`isPlaying`)).toEqual(false);

    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`mouseenter`);

    jest.advanceTimersByTime(1000);
    movieCard.update();

    expect(movieCard.state(`isPlaying`)).toEqual(true);
    jest.useRealTimers();
  });

  it(`When you move the cursor from the card, the video stops.`, () => {
    const movieCard = mount(
        <MovieCard
          title={title}
          src={src}
          poster={poster}
          onClick={handleClick}
        />
    );

    movieCard.setState({isPlaying: true});

    expect(movieCard.state(`isPlaying`)).toEqual(true);

    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`mouseleave`);
    movieCard.update();

    expect(movieCard.state(`isPlaying`)).toEqual(false);
  });
});
