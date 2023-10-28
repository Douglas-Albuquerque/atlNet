import React, { useState } from 'react';
import InfoModal from '../infoModal/InfoModal';
import InputSearch from '../inputSearch/InputSearch';
import './ButtonModal.css'

function ButtonModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div>
      <div className='modal'>
        <InfoModal
          openModal={isModalOpen}
          closeModal={() => setIsModalOpen(false) }
        />
        <InputSearch
          openModal={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default ButtonModal;