import React from 'react';
import Footer from '../../Components/Footer.js';
import InfoModal from '../../Components/InfoModal.js';
import NavBar from '../../Components/NavBat.js';
import logoImg from '../../img/atl_azul.png'
import './style.css'

function Home() {
  return (
    <div>
      <NavBar />
      <div className='modal'>
        <input type="text" />
        <InfoModal />
      </div>
      <div className='bodySpace'>
        {<img className='back-img' src={logoImg} alt='Logo da Atlanta Técnologia' />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;