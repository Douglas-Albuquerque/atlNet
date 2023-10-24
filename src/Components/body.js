import React, { useState } from 'react';
import InfoModal from '../Components/InfoModal.js';
import InputEquip from '../Components/InputEquip.js';
import logoImg from '../img/atl_azul.png'
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
        openModal={()=>setIsModalOpen(true)}
        />
      </div>
      <div className='bodySpace'>
        {<img className='back-img' src={logoImg} alt='Logo da Atlanta Tecnologia' />}
      </div>
      
    </div>
  );
};

export default Body;