import { toast } from 'react-toastify';
import { Error } from '../types/types';

export const onErrorToast = (e: Error) => {
  toast.dismiss();
  toast.error(`🍕 ${e.message}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const onSuccessToast = (e: String) => {
  toast.success(`🍕 ${e}`, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const onInfoToast = (e: Error) => {
  toast.info(`🍕   ${e.message}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
