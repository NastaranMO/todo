import React from 'react';
import './index.scss';
import Card from '../Card';

interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

type Props = {
  todos: Todo[];
};

const Index = ({ todos }: Props) => {
  return (
    <ul className='list'>
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
      <li className='footer-item'>
        <span className='items-left'>5 items left</span>
        <div className='actions'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button className='clear'>Clear Completed</button>
      </li>
    </ul>
  );
};

export default Index;
