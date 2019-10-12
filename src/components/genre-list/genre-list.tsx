import * as React from "react";

interface Props {
  genres: string[],
  activeGenre: string,
  onClick: (genre: string) => void,
}

const GenreList = ({genres, activeGenre, onClick}: Props) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={`${genre}-${index}`}
          className={`catalog__genres-item${(activeGenre === genre) ? ` catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(event) => {
              event.preventDefault();
              onClick(genre);
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
