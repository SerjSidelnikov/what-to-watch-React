import renderer from 'react-test-renderer';

import App from './app';
import films from '../../moks/films';

describe(`The application is displayed correctly.`, () => {
  it(`App correctly renders after launch`, () => {

    const component = renderer.create(
        <App
          movies={films}
        />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
