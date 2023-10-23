import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import Pag from './Pagination';
const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token['colorWhite'],
    padding: token.paddingSM,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid',
  },
}));
const InfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };
  const modalStyles = {
    header: {
      borderRadius: 2,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
      color: '#FFFFFF'
    },
    content: {
      boxShadow: '0 0 30px #999',
      background: '#1F3F6E',
      margin: "auto"
    },
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={() => toggleModal(0, true)}>
          Buscar
        </Button>
      </Space>
      <Modal
        title="Equipamento"
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        footer={<Pag />}
        classNames={classNames}
        styles={modalStyles}
      >
        <p>Codigo Local:</p>
        <p>Endereço: </p>
        <p>Sentido:</p>
        <p>Status:</p>
        <p>Longitude:</p>
        <p>Latitude:</p>
        <p>Tipo do equipamento: LPR Fixo</p>

      </Modal>

    </>
  );
};
export default InfoModal;