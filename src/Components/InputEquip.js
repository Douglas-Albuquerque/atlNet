import { ConfigProvider, Input, Space } from 'antd';
import React, { useState } from 'react';
const { Search } = Input;

const InputEquip = ({ openModal }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1F4070",
      }
    }}
  >
    <Space direction="vertical">
      <Search
        placeholder="Insira o cod. Local"
        onSearch={openModal}
        enterButton
      />
    </Space>
  </ConfigProvider>
);
export default InputEquip;