import {PureComponent} from 'react';

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
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
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
