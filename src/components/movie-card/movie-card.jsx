import {PureComponent} from 'react';

import VideoPlayer from '../video-player/video-player';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this._timer = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  handleMouseLeave() {
    clearTimeout(this._timer);
    this.setState({isPlaying: false});
  }

  render() {
    const {title, src, poster, onClick} = this.props;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
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
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
