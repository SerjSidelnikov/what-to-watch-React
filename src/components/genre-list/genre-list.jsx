const GenreList = ({genres, activeGenre, onClick}) => {
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item${(activeGenre === `All genres`) ? ` catalog__genres-item--active` : ``}`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(event) => onClick(event, `All genres`)}
        >All genres</a>
      </li>

      {genres.map((genre, index) => (
        <li
          key={`${genre}-${index}`}
          className={`catalog__genres-item${(activeGenre === genre) ? ` catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(event) => onClick(event, genre)}
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

export default GenreList;
