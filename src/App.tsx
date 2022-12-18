import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (todo: string): void => {
    setTodos((prev) => [...prev, { id: 1, name: todo, isDone: false }]);
  };

  return (
    <div className='App'>
      <InputField addTodos={addTodos} />
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
