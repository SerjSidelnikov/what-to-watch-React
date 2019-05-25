import {PureComponent} from 'react';

const withTitleClick = (Component) => {
  class WithTitleClick extends PureComponent {
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
