import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BgImage } from '../../Components/bgImage/BgImage.js';
import ButtonEquipament from '../../Components/ButtonEquipament/ButtonEquipament.js';
import InfoModal from '../../Components/infoModal/InfoModal.js';

import './Equipaments.css';

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
            <div className='contentEquipaments'>
                {equipments.map((item, id) => (
                    <ButtonEquipament
                        key={id}
                        name={item.codEquip}
                        data={item}
                        openModal={() => openModal(item)}
                    />
                ))}
            </div>
            <InfoModal openModal={showModal} closeModal={closeModal} data={selectedEquipment} />
        </div>
    );
};

export default Equipaments;
