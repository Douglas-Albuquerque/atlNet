import React, { useState } from 'react';
import InfoModal from '../infoModal/InfoModal';
import InputSearch from '../inputSearch/InputSearch';
import './ButtonModal.css'
import axios from 'axios';

function ButtonModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [codEquip, setIscodEquip] = useState("");
  const [data, setData] = useState([]);
  async function searchEquip(){
    await axios.post("http://localhost:3001/searcEquipById", 
    {codEquip: codEquip}
    ).then(
      response => {
        console.log(response.data);
        setData(response.data[0]);
        setIsModalOpen(true);
      }
    ).catch(
      err => {
        console.log(err);
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
          onChangeText={(e)=>setIscodEquip(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ButtonModal;