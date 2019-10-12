import * as React from "react";

import VideoPlayer from '../video-player/video-player';

const MovieCard = ({title, src, poster, onClick, isPlaying, onMouseEnter, onMouseLeave}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={src}
          poster={poster}
          muted={true}
          isPlaying={isPlaying}
        />
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

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  title: ``,
  src: ``,
  poster: ``,
  onClick: () => {},
  isPlaying: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default MovieCard;
