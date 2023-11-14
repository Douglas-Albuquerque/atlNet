import React, { useEffect, useState } from 'react';
import './Contracts.css';
import { BgImage } from '../../Components/bgImage/BgImage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonContract from '../../Components/ButtonContract/ButtonContract'

const Contracts = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()
    function navEquip(item) {
        navigate("/equipamentos/:item", { item: item })
    }
    async function getEquip() {
        await axios.get("http://34.228.96.239:3001/searchContract")
            .then(
                response => {
                    setData(response.data)
                }
            ).catch(
                err => {
                }
            )
    }
    useEffect(() => {
        getEquip()
    }, [])
    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                {data.map((item, index) => (
                    <ButtonContract
                        key={index}
                        name={item.nameContract}
                        onClick={() => navEquip(item.Equipaments)}
                    />
                ))}
            </div>
        </div>
    );

};
export default Contracts;