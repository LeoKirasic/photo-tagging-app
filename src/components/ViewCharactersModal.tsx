import React from 'react';
import Modal from 'react-modal';

const waldo = require('../assets/waldo.jpg');
const odlaw = require('../assets/odlaw.jpg');
const wizard = require('../assets/wizard.jpg');
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

Modal.setAppElement(document.getElementById('root') as any);
function ViewCharactersModal() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#2274A5';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="text-white hover:text-blue" onClick={openModal}>
        View Characters
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {' '}
        <div className="flex">
          <h2 className="pr-24" ref={(_subtitle) => (subtitle = _subtitle)}>
            Find the Following Characters
          </h2>
          <div
            className=" w-fit hover:text-blue cursor-pointer"
            onClick={closeModal}
          >
            Close
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <div>Odlaw</div>
            <img className="w-22 h-44" src={odlaw} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <div>Waldo</div>
            <img className="w-22 h-44" src={waldo} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <div>Wizard</div>
            <img className="w-22 h-44" src={wizard} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ViewCharactersModal;
