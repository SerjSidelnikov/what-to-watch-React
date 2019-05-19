import films from '../moks/films';

const CHANGE_GENRE_FILTER = `CHANGE_GENRE_FILTER`;
const GET_FILTERED_MOVIES = `GET_FILTERED_MOVIES`;

const initialState = {
  genre: `all genres`,
  films,
};

const actionCreator = {
  changeGenreFilter: (genre) => ({
    type: CHANGE_GENRE_FILTER,
    payload: genre,
  }),

  getFilteredMovies: (genre) => {
    const filteredMovies = initialState.films.filter((movie) => movie.genre === genre);

    return {
      type: GET_FILTERED_MOVIES,
      payload: (genre === `all genre`) ? initialState.films : filteredMovies,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {
        genre: action.payload,
      });

    case GET_FILTERED_MOVIES:
      return Object.assign({}, state, {
        films: action.payload,
      });

    default:
      return state;
  }
};

export {
  actionCreator,
  reducer,
};
