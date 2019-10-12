import * as React from 'react';

interface Props {
  src: string,
  poster: string,
  muted: boolean,
  isPlaying: boolean,
}

interface State {
  progress: number,
  isLoading: boolean,
  isPlaying: boolean,
}

class VideoPlayer extends React.PureComponent<Props, State> {
  protected _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

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

export default VideoPlayer;
