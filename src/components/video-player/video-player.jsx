import {PureComponent, createRef} from 'react';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  render() {
    return (
      <video
        ref={this._videoRef}
      />
    );
  }

  componentDidMount() {
    const {src, poster, muted} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = muted;

    video.oncanplaythrough = () => {
      this.setState({isLoading: false});
    };

    video.onplay = () => {
      this.setState({isPlaying: true});
    };

    video.onpause = () => {
      this.setState({isPlaying: false});
      video.load();
    };

    video.ontimeupdate = () => {
      this.setState({progress: video.currentTime});
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;