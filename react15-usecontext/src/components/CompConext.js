import React from 'react';
import { useContext } from 'react';
import { SimpleContext } from '../context/SimpleContext';


const CompContext = () => {
  const ctxData = useContext(SimpleContext);
  return (
    <div>
      <h4>Simple 컴포넌트</h4>
      <p>{ctxData}</p>
    </div>  
  );
}

export default CompContext;
