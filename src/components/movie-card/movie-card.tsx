import * as React from "react";

import VideoPlayer from '../video-player/video-player';

interface Props {
  title: string,
  src: string,
  poster: string,
  isPlaying: boolean,
  onClick: () => void,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
}

const MovieCard = ({title, src, poster, onClick, isPlaying, onMouseEnter, onMouseLeave}: Props) => {
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

export default MovieCard;
