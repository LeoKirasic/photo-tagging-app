import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgb(70 67 67 / 75%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        isOpen={props.isFinished}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Congratulations!</h3>
          <h2>Please enter your name below:</h2>

          <input {...register('Name Required', { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
}
Form.propTypes = {
  isFinished: PropTypes.bool,
};
export default Form;
