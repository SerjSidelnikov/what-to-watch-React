import * as React from "react";

const GenreList = ({genres, activeGenre, onClick}) => {
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

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

GenreList.defaultProps = {
  genres: [],
  activeGenre: ``,
  onClick: () => {},
};

export default GenreList;
