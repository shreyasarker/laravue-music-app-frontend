import Cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

const storageKey = 'lara-vue-music-storage';
const cookieName = 'lara-vue-music-cookie';
const encryptionToken =  Cookie.get(cookieName) || uuidv4();

const tokenHelper = () => {
  if(!Cookie.get(cookieName)) {
    Cookie.set(cookieName, encryptionToken, { secure: true, expires: 180 });
  }
  return {storageKey, encryptionToken};
};

export default tokenHelper;
