import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BgImage } from '../../Components/bgImage/BgImage';
import ButtonEquipament from '../../Components/ButtonEquipament/ButtonEquipament';

const Equipaments = () => {
    const [equipments, setEquipments] = useState([]);
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

    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                {equipments.map((item, id) => (
                    <ButtonEquipament
                        key={id}
                        name={item.codEquip}
                    />
                ))}
            </div>
        </div>
    );
};

export default Equipaments;
