import React, { useEffect, useState } from 'react';
import { BgImage } from '../../Components/bgImage/BgImage';
import axios from 'axios';

import ButtonEquipament from '../../Components/ButtonEquipament/ButtonEquipament';

const Equipaments = () => {
    const [data, setData] = useState([]);
    console.log(data);
    async function postEquip() {
        await axios.post("http://atlnetserver.ddns.net:3001/searchEquipById")
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
        postEquip()
    }, [])
    return (
        <div className='container'>
            <BgImage />
            <div className='content'>
                <ButtonEquipament />
                {/* {data.map((item, index) => (
                    <ButtonEquipament
                        key={index}
                        name={item.codEquip}
                    />
                ))} */}
            </div>
        </div>
    );

};
export default Equipaments;