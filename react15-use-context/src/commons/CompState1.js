import React from 'react';
import CompState2 from './CompState2';

const CompState1 = ( {propData} ) => {
  return (
    <div>
      <h4>State1 컴포넌트</h4>
      {propData}
      <CompState2 propData2={propData} />
    </div>  
  );
}

export default CompState1;
