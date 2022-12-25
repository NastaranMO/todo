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
  handelDrag: (a: number, b: number) => void;
  draggable: boolean;
};

const Index = ({
  todo,
  removeTodo,
  updateTodos,
  index,
  handelDrag,
  draggable,
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  return (
    <li
      draggable
      onDragStart={() => (dragItem.current = index)}
      onDragEnter={() => (dragOverItem.current = index)}
      onDragEnd={() => {
        // console.log(dragOverItem.current);
        handelDrag(dragItem.current, dragOverItem.current);
      }}
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
