import React from 'react';
import { Input, Space } from 'antd';
import InfoModal from './InfoModal';
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);
const InputEquip = () => (
  <Space direction="vertical">
    <Search placeholder="Insira o cod." onSearch={onSearch} enterButton />
  </Space>
);
export default InputEquip;