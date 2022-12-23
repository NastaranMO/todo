import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from '../../App';
import cross from '../../images/icon-cross.svg';
interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

type Props = {
  todo: Todo;
};

const Index = ({ todo }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <li className='item'>
      <div>
        <div className='circle'></div>
      </div>
      <span> {todo.name}</span>
      <img src={cross} alt='delete-todo' />
    </li>
  );
};

export default Index;
