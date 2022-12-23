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
  update: (todo: Todo) => void;
};

const Index = ({ todos, update }: Props) => {
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
          <Card key={todo.id} todo={todo} removeTodo={update} />
        ))}
        <li className='footer-item'>
          <span className='items-left'>5 items left</span>
          <div className='actions'>
            <button onClick={showAllTodosHandler}>All</button>
            <button onClick={showActiveTodosHandler}>Active</button>
            <button onClick={showCompletedTodosHandler}>Completed</button>
          </div>
          <button className='clear'>Clear Completed</button>
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
