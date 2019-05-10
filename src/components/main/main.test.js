import renderer from 'react-test-renderer';

import Main from './main';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`Main screen correctly renders after launch`, () => {
    const handleClick = jest.fn();

    const component = renderer.create(
        <Main
          movies={films}
          onClick={handleClick}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
