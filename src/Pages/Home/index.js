import React, { useState } from 'react';
import Footer from '../../Components/components.old/Footer.js';
import InfoModal from '../../Components/InfoModal.js';
import InputEquip from '../../Components/InputEquip.js';
import NavBar from '../../Components/components.old/NavBat.js';
import logoImg from '../../img/atl_azul.png'
import './style.css'

function Home() {
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

export default Home;