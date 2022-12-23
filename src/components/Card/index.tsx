import React, { useContext, useState } from 'react';
import './index.scss';
import { ThemeContext } from '../../App';
import cross from '../../images/icon-cross.svg';
import check from '../../images/icon-check.svg';
interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

type Props = {
  todo: Todo;
  removeTodo: (todo: Todo) => void;
  updateTodos: (todo: Todo) => void;
};

const Index = ({ todo, removeTodo, updateTodos }: Props) => {
  return (
    <li className='item'>
      <div
        className='circle-container'
        onClick={() => {
          updateTodos(todo);
        }}
      >
        <div className={todo.isDone ? 'circle-active' : 'circle'}>
          <div className='img-div'></div>
        </div>
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
