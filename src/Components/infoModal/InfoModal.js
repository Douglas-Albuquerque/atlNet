import React, { useState, useEffect } from 'react';
import { ConfigProvider, Modal } from 'antd';
import { createStyles} from 'antd-style';
import Pag from '../Pagination/Pagination';
import Screens from './Screens';



const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: '#F5F5DC',
    padding: token.paddingSM,
    
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #000`,
  },
  'my-modal-header': {
    borderBottom: '3px solid #1F4070',
    
    display: 'flex',
    justifyContent: 'center'
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    backgroundColor: '#ACB4BF',
    width: '900px',
    
  },



}));
const InfoModal = ({ openModal, closeModal, data }) => {
  const [countPage, setCountPage] = useState(1);
  const { styles } = useStyle();
  const goToNextPage = () => {
    if (countPage < 3) {
      setCountPage(countPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (countPage > 1) {
      setCountPage(countPage - 1);
    }
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
      borderRadius: 0,
      paddingInlineStart: 5,
      backgroundColor: '#FFF',
    },
    body: {
      boxShadow: 'inset 0 0 10px #999',
      borderRadius: 5,
      fontSize: '18px'
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '3px solid #1F4070',
    },
    content: {
      boxShadow: '0 0 30px #999',
      marginLeft: '-200px'
    },
  };
  
  useEffect(() => { }, [countPage])
  return (
    <>
      <ConfigProvider
        theme={{
          components:{
            Modal:{
              titleFontSize: 22,
            }
          }
        }}
      >
        <Modal
          title="Equipamento"
          open={openModal}
          onCancel={closeModal}
          footer={
            < Pag
              nextPage={() => goToNextPage()}
              previousPage={() => goToPreviousPage()}
              countPage={countPage}
            />}

          classNames={classNames}
          styles={modalStyles}
        >
          <Screens
            countPage={countPage}
            data={data}
          />
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default InfoModal;