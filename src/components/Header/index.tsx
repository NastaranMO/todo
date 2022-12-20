import React from 'react';
import './index.scss';
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

const Index = () => {
  const theme = 'light';
  const imgAlt = theme === 'light' ? 'moon' : 'sun';
  return (
    <div className={`header ${theme}`}>
      <div className='headerImg'></div>
      <div className='header__container'>
        <h1>Todo</h1>
        <img src={theme === 'light' ? moon : sun} alt={imgAlt} />
      </div>
    </div>
  );
};

export default Index;
