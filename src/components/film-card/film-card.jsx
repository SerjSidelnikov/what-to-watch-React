const FilmCard = ({title, src, onClick, onMouseEnter}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnter}>
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onClick}
        >{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default FilmCard;
