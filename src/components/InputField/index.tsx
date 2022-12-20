import React, { useState } from 'react';
import './index.scss';
interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

type Props = {
  addTodos: (todo: string) => void;
};

const Index = ({ addTodos }: Props) => {
  const [todo, setTodo] = useState<string>('');

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    addTodos(todo);
    setTodo('');
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='form__circle'></div>
      <input
        // className='form__input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Create a new todo...'
      />
    </form>
  );
};

export default Index;
