import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import Pag from '../Pagination/Pagination';

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token['colorWhite'],
    padding: token.paddingContentHorizontalLG,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `0px solid ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid',
  },
}));
const InfoModal = ({ openModal }) => {
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
      borderRadius: 3,
      paddingInlineStart: 25,
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
      <Modal
        title="Equipamento"
        open={openModal}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        footer={< Pag />}
        classNames={classNames}
        styles={modalStyles}
      >
        <p>Codigo Local: ATS94403</p>
        <p>Endereço: BR 155 SAÍDA/ENTRADA PARA PAU D"ARCO Redenção, PA,</p>
        <p>Sentido: Norte/Sul</p>
        <p>Status: ATIVO</p>
        <p>Longitude: -8.01239524343842</p>
        <p>Latitude: -50.063422984314</p>
        <p>Tipo do equipamento: LPR Fixo</p>

      </Modal>

    </>
  );
};
export default InfoModal;