import {shallow} from 'enzyme';

import withGenres from './with-genres';
import films from '../../moks/films';

const MockComponent = () => <div/>;
const MockComponentWrapped = withGenres(MockComponent);
const mockGenres = [`Comedies`, `Documentary`, `Dramas`, `Romance`, `Thrillers`];

describe(`withGenres`, () => {
  it(`Should pass a list of genres.`, () => {
    const wrapper = shallow(<MockComponentWrapped movies={films}/>);

    expect(wrapper.props().genres).toEqual(mockGenres);
  });
});
