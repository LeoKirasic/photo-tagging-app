import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import uniqid from 'uniqid';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#252530',
    color: 'white',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgb(70 67 67 / 75%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  async function formSubmit(data) {
    await setDoc(doc(db, 'leaderboards', uniqid()), data);

    navigate('../leaderboard', { replace: true });
  }
  return (
    <div>
      <Modal
        isOpen={props.isFinished}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(formSubmit)}
        >
          <h3>
            Congratulations! You finished the game in {props.time} seconds
          </h3>

          <h2>Please enter your name below:</h2>

          <div className="flex flex-col items-center">
            <input
              className=" border-cyan-300 outline-none rounded-md text-black"
              {...register('name', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className=" w-fit hover:cursor-pointer hover:text-blue hover:border-b hover:border-blue"
              type="submit"
            />
          </div>

          <input
            className="text-white w-0"
            defaultValue={props.time}
            {...register('time')}
            readOnly
          />
        </form>
      </Modal>
    </div>
  );
}
Form.propTypes = {
  isFinished: PropTypes.bool,
  time: PropTypes.number,
};
export default Form;
