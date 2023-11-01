import React, { useState } from 'react';
import './Contracts.css';
import { BgImage } from '../../Components/bgImage/BgImage';
import axios from 'axios';

const Contracts = () => {
    const [contrato, setContrato] = useState("");
    const [data, setData] = useState([]);
    async function searchEquip() {
        await axios.post("http://localhost:3001/searcEquipById",
            { contrato: contrato }
        ).then(
            response => {
                setData(response.data[0]);
                console.log(response.data[0]);
            }
        ).catch(
            err => {
            }
        )
    };
    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                <button
                >
                    CANAÃ
                </button>
            </div>
        </div>
    );

};
export default Contracts;