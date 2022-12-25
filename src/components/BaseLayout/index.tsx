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

  const remove = (todo: Todo) => {
    const updatedTodos = todos.filter((td) => td.id !== todo.id);
    setTodos(updatedTodos);
  };

  const update = (todo: Todo) => {
    const updatedTodos = todos.map((td) =>
      td.id === todo.id ? { ...td, isDone: !todo.isDone } : td
    );
    setTodos(updatedTodos);
  };

  const handelDrag = (prevId: number, currId: number) => {
    console.log(prevId, currId);
    let _todos = [...todos];
    const dragedItemContent = _todos.splice(prevId, 1)[0];
    _todos.splice(currId, 0, dragedItemContent);
    setTodos(_todos);
    console.log(_todos, todos);
  };

  const clearCompletedTodos = () => setTodos(todos.filter((td) => !td.isDone));

  return (
    <div className={`${theme} main-container`}>
      <Header />
      <main className='todo'>
        <Title />
        <InputField addTodos={addTodos} />
        <Cards
          todos={todos}
          setTodos={setTodos}
          remove={remove}
          update={update}
          clearCompletedTodos={clearCompletedTodos}
          handelDrag={handelDrag}
        />
      </main>
    </div>
  );
};

export default Index;
