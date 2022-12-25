import React, { useEffect, useState } from 'react';
import './index.scss';
import Card from '../Card';

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
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Index = ({
  todos,
  remove,
  update,
  clearCompletedTodos,
  handelDrag,
  setTodos,
}: Props) => {
  const [filteredTodods, setFilteredTodods] = useState<Todo[]>(todos);
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

  const dragStartHandler = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    // console.log('drag starts:', index);
    dragItem.current = index;
  };

  const dragEnterHandler = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    // console.log('drag entered:', index);
    dragOverItem.current = index;
  };

  const handelDrag1 = () => {
    // console.log(prevId, currId);
    let _todos = [...todos];
    const dragedItemContent = _todos.splice(dragItem.current, 1)[0];
    _todos.splice(dragOverItem.current, 0, dragedItemContent);
    setTodos(_todos);
    console.log(_todos);
  };

  return (
    <>
      <ul className='list'>
        {filteredTodods.map((todo, index) => (
          // <Card
          //   key={index}
          //   index={index}
          //   todo={todo}
          //   todos={todos}
          //   removeTodo={remove}
          //   updateTodos={update}
          //   handelDrag={handelDrag}
          //   setTodos={setTodos}
          // />
          <li
            draggable
            onDragStart={(e) => dragStartHandler(e, index)}
            onDragEnter={(e) => dragEnterHandler(e, index)}
            onDragEnd={() => {
              console.log(dragOverItem.current);

              handelDrag1();
            }}
            className='item'
            // onMouseOver={() => setIsHovering(true)}
            // onMouseOut={() => setIsHovering(false)}
          >
            <div className='circle-container'>
              <div className={todo.isDone ? 'circle-active' : 'circle'}>
                <div className='img-div'></div>
              </div>
            </div>
            <span className={todo.isDone ? 'strikethrough' : ''}>
              {' '}
              {todo.name}
            </span>
            <img
              // className={isHovering ? 'remove remove--active' : 'remove'}
              // src={cross}
              alt='delete-todo'
              onClick={(e) => {
                e.stopPropagation();
                // removeTodo(todo);
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
