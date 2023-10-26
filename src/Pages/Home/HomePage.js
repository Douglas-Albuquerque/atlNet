import React, { useState } from 'react';
import './HomePage.css';
import ButtonModal from '../../Components/ButtonModal/ButtonModal'
import { BgImage } from '../../Components/bgImage/BgImage';

const HomePage = () => {

    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                <ButtonModal />
            </div>
        </div>
    );

};
export default HomePage;