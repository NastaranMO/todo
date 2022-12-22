import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from '../../App';
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

const Index = () => {
  const { theme } = useContext(ThemeContext);
  const imgAlt = theme === 'light' ? 'moon' : 'sun';
  return (
    <div className='title'>
      <h1>Todo</h1>
      <img src={theme === 'light' ? moon : sun} alt={imgAlt} />
    </div>
  );
};

export default Index;
