import React from 'react';
import './index.scss';
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

const Index = () => {
  let theme = 'light';
  const imgAlt = theme === 'light' ? 'moon' : 'sun';
  return (
    <header className='header'>
      <div className='headerImg'></div>
      <div className='header__container'>
        <h1>Todo</h1>
        <img src={theme === 'light' ? moon : sun} alt={imgAlt} />
      </div>
    </header>
  );
};

export default Index;
