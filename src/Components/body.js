import React, { useState } from 'react';
import InfoModal from '../Components/InfoModal.js';
import InputEquip from '../Components/InputEquip.js';
import './body.css'

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className='modal'>
        <InfoModal
          openModal={isModalOpen}
        />
        <InputEquip
          openModal={() => setIsModalOpen(true)}
        />
      </div>
      <div className='bodySpace'>
      </div>

    </div>
  );
};

export default Body;