import React from 'react';
import { BgImage } from '../../Components/bgImage/BgImage';
import "./CreateEquip.css"


export const CreateEquip = () => {

    return (
        <div className='container'>
            <BgImage />
            <form className="formContainer">
                <div className="locationEquip">
                    <span className="textLabel">ID Contrato:</span>
                    <input type="text" className="dataInput" />

                </div>
            </form>
        </div>
    );
}