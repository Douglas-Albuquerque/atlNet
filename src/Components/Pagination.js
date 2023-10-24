import React from 'react';
import { Pagination } from 'antd';
import './Pagination.css'
const Pag = () => (
  <>
    <div className='container'>
      
      <Pagination simple defaultCurrent={1} total={30} />
    </div>
  </>
);
export default Pag;