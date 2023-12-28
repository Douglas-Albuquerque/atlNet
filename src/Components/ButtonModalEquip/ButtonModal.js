import React, { useState } from 'react';
import InfoModal from '../infoModal/InfoModal';
import InputSearch from '../inputSearch/InputSearch';
import './ButtonModalEquip.css'
import axios from 'axios';

function ButtonModalEquip() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codEquip, setIscodEquip] = useState("");
  const [data, setData] = useState([]);
  async function searchEquip() {
    await axios.post("http://atlnetserver.ddns.net:3001/searchEquipById",
      { codEquip: codEquip }
    ).then(
      response => {
        setData(response.data[0]);
        setIsModalOpen(true);
      }
    ).catch(
      err => {
      }
    )
  };
  return (
    <div>
      <div className='modal'>
        <InfoModal
          onClick={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          data={data}
          
        />
      Clique
      </div>
    </div>
  );
};

export default ButtonModalEquip;