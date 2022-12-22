import React, { useState, useContext } from 'react';
import './index.scss';
import Header from '../Header';
import Title from '../Title';
import { ThemeContext } from '../../App';
import InputField from '../InputField';
import Cards from '../Cards';
import { v4 as uuid } from 'uuid';

interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

const createTodo = (todo: string): Todo => ({
  id: uuid(),
  name: todo,
  isDone: false,
});

const Index = () => {
  const theme = useContext(ThemeContext);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (todo: string): void => {
    const newTodo: Todo = createTodo(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className={`${theme} main-container`}>
      <Header />
      <main className='todo'>
        <Title />
        <InputField addTodos={addTodos} />
        <Cards todos={todos} />
      </main>
    </div>
  );
};

export default Index;
