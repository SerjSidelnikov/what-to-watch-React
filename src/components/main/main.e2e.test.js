import {shallow} from 'enzyme';

import Main from './main';

describe(`<Main/>`, () => {
  it(`Simulates pressing the card title`, () => {
    const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];
    const handleClick = jest.fn();

    const wrapper = shallow(
        <Main
          movieNames={movies}
          onClick={handleClick}
        />
    );

    const titles = wrapper.find(`.small-movie-card__link`);

    titles.forEach((title) => title.simulate(`click`, {preventDefault() {}}));

    expect(handleClick).toHaveBeenCalledTimes(titles.length);
  });
});
