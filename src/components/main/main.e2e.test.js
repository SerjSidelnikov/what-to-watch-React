import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';

Enzyme.configure({adapter: new Adapter()});

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
