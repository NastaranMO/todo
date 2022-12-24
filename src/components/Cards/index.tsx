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
};

const Index = ({ todos, remove, update, clearCompletedTodos }: Props) => {
  const [filteredTodods, setFilteredTodods] = useState<Todo[]>(todos);

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
        {filteredTodods.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            removeTodo={remove}
            updateTodos={update}
          />
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
