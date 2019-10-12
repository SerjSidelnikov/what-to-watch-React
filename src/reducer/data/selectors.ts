import {createSelector} from "reselect";
import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getGenres = createSelector(
    getFilms,
    (films) => [`All genres`, ...new Set(films.map((film) => film.genre))]
);

export const getFilteredFilms = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      return (activeGenre === `All genres`) ? films : films.filter((film) => film.genre === activeGenre);
    }
);
