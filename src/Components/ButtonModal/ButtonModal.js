import React, { useState } from 'react';
import InfoModal from '../infoModal/InfoModal';
import InputSearch from '../inputSearch/InputSearch';
import './ButtonModal.css'
import axios from 'axios';

function ButtonModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codEquip, setIscodEquip] = useState("");
  const [data, setData] = useState([]);
  async function searchEquip() {
    await axios.post("http://34.228.96.239:3001/searchEquipById",
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
          openModal={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          data={data}
        />
        <InputSearch
          openModal={() => searchEquip()}
          value={codEquip}
          onChangeText={(e) => setIscodEquip(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ButtonModal;