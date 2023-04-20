import Api from './Api.js';

const Csrf = () => {
  return Api.get('/csrf-cookie');
}

export default Csrf;