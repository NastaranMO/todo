import React, { useEffect, useState } from 'react';
import './index.scss';
import '../Card/index.scss';
import cross from '../../images/icon-cross.svg';

interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

type Props = {
  todos: Todo[];
  remove: (todo: Todo) => void;
  update: (todo: Todo) => void;
  clearCompletedTodos: () => void;
  handelDrag: (a: number, b: number) => void;
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Index = ({
  todos,
  remove,
  update,
  clearCompletedTodos,
  handelDrag,
}: Props) => {
  const [filteredTodods, setFilteredTodods] = useState<Todo[]>(todos);
  const [isHovering, setIsHovering] = useState(false);

  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  useEffect(() => {
    setFilteredTodods(todos);
  }, [todos]);

  const showAllTodosHandler = () => setFilteredTodods(todos);
  const showActiveTodosHandler = () =>
    setFilteredTodods(todos.filter((todo) => !todo.isDone));
  const showCompletedTodosHandler = () =>
    setFilteredTodods(todos.filter((todo) => todo.isDone));

  return (
    <>
      <ul className='list'>
        {filteredTodods.map((todo, index) => (
          <li
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOverItem.current = index)}
            onDragEnd={() => {
              // console.log(dragOverItem.current);
              handelDrag(dragItem.current, dragOverItem.current);
            }}
            className='item'
            key={todo.id}
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
          >
            <div className='circle-container' onClick={() => update(todo)}>
              <div className={todo.isDone ? 'circle-active' : 'circle'}>
                <div className='img-div'></div>
              </div>
            </div>
            <span className={todo.isDone ? 'strikethrough' : ''}>
              {' '}
              {todo.name}
            </span>
            <img
              className={isHovering ? 'remove remove--active' : 'remove'}
              src={cross}
              alt='delete-todo'
              onClick={(e) => {
                e.stopPropagation();
                remove(todo);
              }}
            />
          </li>
        ))}
        <li className='footer-item'>
          <span className='items-left'>
            {filteredTodods.filter((td) => !td.isDone)?.length || 0} items left
          </span>
          <div className='actions'>
            <button onClick={showAllTodosHandler}>All</button>
            <button onClick={showActiveTodosHandler}>Active</button>
            <button onClick={showCompletedTodosHandler}>Completed</button>
          </div>
          <button className='clear' onClick={clearCompletedTodos}>
            Clear Completed
          </button>
        </li>
      </ul>
      <div className='actions-mobile'>
        <button onClick={showAllTodosHandler}>All</button>
        <button onClick={showActiveTodosHandler}>Active</button>
        <button onClick={showCompletedTodosHandler}>Completed</button>
      </div>
    </>
  );
};

export default Index;
