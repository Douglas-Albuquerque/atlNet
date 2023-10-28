import React from 'react';
import './Pagination.css'
import {LeftOutlined,RightOutlined}from '@ant-design/icons';
function Pag({ nextPage, previousPage, countPage }) {
  console.log('pag',countPage);
  return (

    <div className='footerContainer'>
      <button
        onClick={previousPage}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: (countPage === 1) ? 'not-allowed' : 'pointer',
        }}
      >
        <LeftOutlined
          style={{
            color: (countPage === 1) ? '#999' : '#122440',
            fontSize: 18,
            marginRight: 8
          }} />
      </button>
      <div style={{
        width: (countPage === 1) ? 12 : 8,
        height: (countPage === 1) ? 12 : 8,
        borderRadius: (countPage === 1) ? 6 : 4,
        backgroundColor: (countPage === 1) ? '#122440' : '#999'
      }}>
      </div>
      <div style={{
        marginRight: 4,
        marginLeft: 4,
        width: (countPage === 2) ? 12 : 8,
        height: (countPage === 2) ? 12 : 8,
        borderRadius: (countPage === 2) ? 6 : 4,
        backgroundColor: (countPage === 2) ? '#122440' : '#999'
      }}>
      </div>
      <div style={{
        width: (countPage === 3) ? 12 : 8,
        height: (countPage === 3) ? 12 : 8,
        borderRadius: (countPage === 3) ? 6 : 4,
        backgroundColor: (countPage === 3) ? '#122440' : '#999'
      }}>
      </div>
      <button
        onClick={nextPage}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: (countPage === 3) ? 'not-allowed' : 'pointer'
        }}
      >
        < RightOutlined
          style={{
            color: (countPage === 3) ? '#999' : '#122440',
            fontSize: 18,
            marginLeft: 8
          }}
        />
      </button>
    </div>
  )
}
export default Pag;