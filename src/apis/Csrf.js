import Cookie from 'js-cookie';
import Api from './Api.js';

const Csrf = () => {
  let token = Cookie.get('XSRF-TOKEN');

  if(token) {
    return new Promise((resolve) => {
      resolve(token);
    })
  }
  return Api.get('/csrf-cookie');
}

export default Csrf;