import history from '../../history';

const initialState = {
  isAuthorizationRequired: false,
  data: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_DATA: `GET_DATA`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  getData: (data) => {
    return {
      type: ActionType.GET_DATA,
      payload: data,
    };
  },
};

const Operation = {
  sendUserData: ({email, password}) => (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.requireAuthorization(true));
          dispatch(ActionCreator.getData(response.data));
          history.push(`/`);
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.GET_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });

    default:
      return state;
  }
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
