import React, { useState } from 'react';
import './index.scss';

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
    <div className='form-container'>
      {' '}
      <form className='form' onSubmit={submitHandler}>
        <div>
          <div className='circle'></div>
        </div>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Create a new todo...'
        />
      </form>
    </div>
  );
};

export default Index;
