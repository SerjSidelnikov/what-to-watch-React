import {shallow, mount} from 'enzyme';

import MovieCard from './movie-card';
import MoviesList from '../movies-list/movies-list';
import films from '../../moks/films';

describe(`<MovieCard/>`, () => {
  const handleClick = jest.fn();
  const handleActiveMovie = jest.fn();
  const {title, src} = films[0];

  it(`Simulates pressing the card title`, () => {
    const wrapper = shallow(
        <MovieCard
          title={title}
          src={src}
          onClick={handleClick}
          onActiveMovie={handleActiveMovie}
        />
    );

    const titleLink = wrapper.find(`.small-movie-card__link`);

    titleLink.simulate(`click`, {preventDefault() {}});

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`On click on a button, the correct information gets into the callback function: an active card with a movie.`, () => {
    const cardList = mount(
        <MoviesList
          movies={films}
          onClick={handleClick}
        />
    );

    expect(cardList.state(`activeMovie`)).toEqual(null);

    const buttons = cardList.find(`.small-movie-card__play-btn`);

    buttons.forEach((btn, index) => {
      btn.simulate(`click`);
      cardList.update();

      expect(cardList.state(`activeMovie`)).toEqual(films[index]);
    });
  });
});
