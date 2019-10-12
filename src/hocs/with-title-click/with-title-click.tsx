import * as React from 'react';

const withTitleClick = (Component) => {
  class WithTitleClick extends React.PureComponent {
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
