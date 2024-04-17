import React from 'react';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { MyContext } from '../context/SimpleContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const userMessage = useContext(MyContext);

  return (
    <div className="content"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray', 
        color : isDark ? 'white' : 'black'
      }}
    >
      <p>{userMessage}</p>
    </div>  
  );
}

export default Content;
