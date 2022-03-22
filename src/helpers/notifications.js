import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const showError = (message) => {
    toast.error(message);
}
const showSuccess = () => {
    toast.success('Success!');
}

export {showError, showSuccess}