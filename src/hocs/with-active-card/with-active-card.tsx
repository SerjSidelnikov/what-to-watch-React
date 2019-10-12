import * as React from 'react';
import {Subtract} from "utility-types";

interface InjectedProps {
  isPlaying: boolean,
}

interface State {
  isPlaying: boolean,
}

const withActiveCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveCard extends React.PureComponent<T, State> {
    private _timer: number;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this._timer = window.setTimeout(() => {
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
