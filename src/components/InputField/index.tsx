import React from 'react';
import './index.css';

const index = () => {
  return (
    <form className='form'>
      <div className='form__circle'></div>
      <input className='form__input' placeholder='Create a new todo...' />
    </form>
  );
};

export default index;
