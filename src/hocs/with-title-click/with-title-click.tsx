import * as React from 'react';
import {Subtract} from "utility-types";

interface InjectedProps {
  handleClick: () => void,
}

const withTitleClick = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithTitleClick extends React.PureComponent<T, null> {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {}

    render() {
      return (
        <Component
          {...this.props}
          onClick={this.handleClick}
        />
      );
    }
  }

  return WithTitleClick;
};

export default withTitleClick;
