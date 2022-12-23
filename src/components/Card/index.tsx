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
  removeTodo: (todo: Todo) => void;
};

const Index = ({ todo, removeTodo }: Props) => {
  console.log(removeTodo.toString());
  return (
    <li className='item'>
      <div>
        <div className='circle'></div>
      </div>
      <span> {todo.name}</span>
      <img
        src={cross}
        alt='delete-todo'
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo);
        }}
      />
    </li>
  );
};

export default Index;
