import React, { useContext, useRef, useState } from 'react';
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
  index: number;
  removeTodo: (todo: Todo) => void;
  updateTodos: (todo: Todo) => void;
};

const Index = ({ todo, removeTodo, updateTodos, index }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const dragId = useRef<any>(null);
  const dragOverId = useRef<any>(null);

  const dragStartHandler = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    console.log('drag starts:', index);
  };
  const dragEnterHandler = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    console.log('drag entered:', index);
  };
  return (
    <li
      draggable
      onDragStart={(e) => dragStartHandler(e, index)}
      onDragEnter={(e) => dragEnterHandler(e, index)}
      className='item'
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div className='circle-container' onClick={() => updateTodos(todo)}>
        <div className={todo.isDone ? 'circle-active' : 'circle'}>
          <div className='img-div'></div>
        </div>
      </div>
      <span className={todo.isDone ? 'strikethrough' : ''}> {todo.name}</span>
      <img
        className={isHovering ? 'remove remove--active' : 'remove'}
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
