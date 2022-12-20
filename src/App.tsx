import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import InputField from './components/InputField';
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

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (todo: string): void => {
    const newTodo: Todo = createTodo(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <Header />
      <main className='todo'>
        <InputField addTodos={addTodos} />
        <ul>
          {todos.map((todo) => (
            <li>{todo.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

//interface, type extends
//neucha font
//position relative to put button inside of input
//focus input box-shadow all;
//usestate<string>('')
//interface Props
//always for each function component put the type React.fc<props>
//put the type in front of usestate
//e: rract.formevent
//useref
//react icons/ai or /md => search i doc

export default App;
