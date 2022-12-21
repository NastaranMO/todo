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
    </ul>
  );
};

export default Index;