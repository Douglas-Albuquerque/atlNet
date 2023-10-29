import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import './InputSearch.css'

function InputEquip({ openModal, value, onChangeText }) {
  return (
    <div className='containerSearch'>
      <div>
        <input className='inputEquip'
          placeholder='Insira o Cod. Equipamento'
          value={value}
          onChange={onChangeText}
        >
        </input>
      </div>
      <div>
        <button className='inputButton'
        onClick={openModal}
        >
          <SearchOutlined
            style={{
              fontSize: "20px",
              marginRight: "5px",
            }} />
        </button>
      </div>
    </div>
  );
};
export default InputEquip;