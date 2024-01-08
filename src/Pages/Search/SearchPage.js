import React from 'react';
import './SearchPage.css';
import ButtonModal from '../../Components/ButtonModal/ButtonModal'
import { BgImage } from '../../Components/bgImage/BgImage';

const SearchPage = () => {
    
    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                <ButtonModal />
            </div>
        </div>
    );

};
export default SearchPage;