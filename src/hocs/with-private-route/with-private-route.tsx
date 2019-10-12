import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Subtract} from "utility-types";

interface InjectedProps {
  isAuthorizationRequired: boolean,
}

const withPrivateRoute = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithPrivateRoute extends React.PureComponent<T, null> {
    constructor(props) {
      super(props);
    }

    render() {
      const {isAuthorizationRequired} = this.props;

      if (!isAuthorizationRequired) {
        return <Redirect to={`/login`}/>;
      }

      return <Component {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withPrivateRoute;
