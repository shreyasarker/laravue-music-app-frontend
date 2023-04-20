import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const successToast = (message) => {
  toast.success(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_RIGHT,
    pauseOnFocusLoss: true,
    autoClose: 1500
  });
}

export const errorToast = (message) => {
  toast.error(message, {
    theme: 'colored',
    position: toast.POSITION.TOP_RIGHT,
    pauseOnFocusLoss: true,
    autoClose: 1500
  });
}
