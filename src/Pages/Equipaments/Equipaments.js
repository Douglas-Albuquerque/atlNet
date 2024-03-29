import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BgImage } from '../../Components/bgImage/BgImage.js';
import ButtonEquipament from '../../Components/ButtonEquipament/ButtonEquipament.js';
import InfoModal from '../../Components/infoModal/InfoModal.js';

import './Equipaments.css';

const EquipamentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  grid-column-gap: -100px
`;

const Equipaments = () => {
    const [equipments, setEquipments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const { pathname } = location;
        const equipmentData = pathname.split('/equipamentos/')[1];
        if (equipmentData) {
            try {
                const decodedData = decodeURIComponent(equipmentData);
                const parsedEquipmentData = JSON.parse(decodedData);
                setEquipments(parsedEquipmentData);
            } catch (error) {
                console.error('Erro ao processar dados dos equipamentos:', error);
            }
        }
    }, [location]);

    const sortEquipments = (equipments) => {
        return equipments.slice().sort((a, b) => a.codEquip - b.codEquip);
    };

    const openModal = (equipment) => {
        setSelectedEquipment(equipment);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedEquipment(null);
        setShowModal(false);
    };

    return (
        <div className='container'>
            <BgImage />
            <div className='containerEquipaments'>
                <EquipamentsContainer>
                    {sortEquipments(equipments).map((item, id) => (
                        <ButtonEquipament
                            key={id}
                            name={item.codEquip}
                            data={item}
                            openModal={() => openModal(item)}
                        />
                    ))}
                </EquipamentsContainer>
            </div>
            <InfoModal openModal={showModal} closeModal={closeModal} data={selectedEquipment} />
        </div>
    );
};

export default Equipaments;