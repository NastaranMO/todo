import React from 'react';
interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

type Props = {
  todo: Todo;
};

const Index = ({ todo }: Props) => {
  return <li className='item'>{todo.name}</li>;
};

export default Index;
