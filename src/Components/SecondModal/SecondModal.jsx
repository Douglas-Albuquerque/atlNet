import React from 'react';
import './SecondModal.css';

const SecondModal = ({ showModal, closeModal, children }) => {
  return (
    <div className={`modal ${showModal ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default SecondModal;
