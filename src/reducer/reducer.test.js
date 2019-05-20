import {
  reducer,
  CHANGE_GENRE_FILTER,
  GET_FILTERED_MOVIES,
} from './reducer';
import films from '../moks/films';

describe(`Test reducer`, () => {
  it(`Should return initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      films,
    });
  });

  it(`Should change genre filter`, () => {
    expect(reducer({genre: `All genres`}, {
      type: CHANGE_GENRE_FILTER,
      payload: `Comedies`
    })).toEqual({
      genre: `Comedies`,
    });
  });

  it(`Should return filtered movies`, () => {
    const mockFilteredMovies = films[0];

    expect(reducer({films}, {
      type: GET_FILTERED_MOVIES,
      payload: mockFilteredMovies,
    })).toEqual({
      films: mockFilteredMovies,
    });
  });
});
