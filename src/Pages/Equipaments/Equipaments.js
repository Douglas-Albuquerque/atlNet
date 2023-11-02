import React from 'react';
import { BgImage } from '../../Components/bgImage/BgImage';
import { useParams } from 'react-router-dom';

const Equipaments = () => {
    const {item} = useParams();
    console.log(item);
    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                <button
               
                >
                    ATS94301
                </button>
                <button
               
                >
                    ATS94302
                </button>
                <button
               
                >
                    ATS94303
                </button>
            </div>
        </div>
    );

};
export default Equipaments;