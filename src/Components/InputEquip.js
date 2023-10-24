import { Input, Space } from 'antd';
import React, { useState } from 'react';
const { Search } = Input;

const InputEquip = ({openModal}) => (
  <Space direction="vertical">
    <Search 
    placeholder="Insira o cod. Local" 
    onSearch={openModal} 
    enterButton
    />
  </Space>
);
export default InputEquip;