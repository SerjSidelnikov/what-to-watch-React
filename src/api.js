import axios from 'axios';
import history from './history';

const serverErrors = {
  accessForbidden: 403,
};

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === serverErrors.accessForbidden) {
      history.push(`/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
