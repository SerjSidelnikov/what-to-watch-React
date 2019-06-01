const initialState = {
  films: [],
  activeGenre: `All genres`,
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  GET_FILTERED_MOVIES: `GET_FILMS_BY_FILTER`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const actionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
    payload: genre,
  }),

  getFilteredMovies: (genre) => ({
    type: ActionType.GET_FILTERED_MOVIES,
    payload: genre,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
};

const Operations = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(actionCreator.loadFilms(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILTERED_MOVIES:
      return Object.assign({}, state, {
        activeGenre: action.payload,
      });

    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload
      });

    default:
      return state;
  }
};

export {
  reducer,
  actionCreator,
  ActionType,
  Operations,
};
