const initialState = {
  films: [],
  activeGenre: `All genres`,
};

const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE_FILTER,
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
      .then((response) => dispatch(ActionCreator.loadFilms(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
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
  ActionCreator,
  ActionType,
  Operations,
};
