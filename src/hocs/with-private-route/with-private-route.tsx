import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.PureComponent {
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

  WithPrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withPrivateRoute;
