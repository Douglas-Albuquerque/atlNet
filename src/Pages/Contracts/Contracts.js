import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonContract from '../../Components/ButtonContract/ButtonContract'

import './Contracts.css';
import styled from 'styled-components';
import { BgImage } from '../../Components/bgImage/BgImage';

const EquipamentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  grid-column-gap: -100px
`;

const Contracts = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()
    function navEquip(equipments) {
        navigate(`/equipamentos/${encodeURIComponent(JSON.stringify(equipments))}`)
    }
    async function getEquip() {
        await axios.get(
            process.env.REACT_APP_API_URL + "/searchContract")
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

    const sortedData = data.slice().sort((a, b) => a.nameContract.localeCompare(b.nameContract));

    return (
        <div className='container'>
            <BgImage />
            <div className='contentContract'>
                <EquipamentsContainer>
                    {sortedData.map((item, id) => (
                        <ButtonContract
                            key={id}
                            name={item.nameContract}
                            onClick={() => navEquip(item.Equipaments)}
                        />
                    ))}
                </EquipamentsContainer>
            </div>
        </div>
    );

};
export default Contracts;