import React, { useEffect, useState } from 'react';
import './Contracts.css';
import { BgImage } from '../../Components/bgImage/BgImage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonContract from '../../Components/ButtonContract/ButtonContract'

const Contracts = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()
    function navEquip(equipments) {
        navigate(`/equipamentos/${encodeURIComponent(JSON.stringify(equipments))}`)
    }
    async function getEquip() {
        await axios.get("http://localhost:3001/searchContract")
            .then(
                response => {
                    setData(response.data);
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
            <div className='contentContract'>
                    {data.map((item, id) => (
                    <ButtonContract
                        key={id}
                        name={item.nameContract}
                        onClick={() => navEquip(item.Equipaments)}
                    />
                ))}
            </div>
        </div>
    );

};
export default Contracts;