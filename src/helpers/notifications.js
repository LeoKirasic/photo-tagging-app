import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const showError = (message) => {
  toast.error(message, {
    theme: 'dark',
  });
};
const showSuccess = () => {
  toast.success('Success!', {
    theme: 'dark',
  });
};

export { showError, showSuccess };
