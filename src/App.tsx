import React, { useState, createContext } from 'react';
import './App.scss';
import BaseLayout from './components/BaseLayout';

type Theme = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<Theme>({ theme: '', setTheme: () => {} });

const App = () => {
  const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useState('dark');
  document.documentElement.classList.add(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BaseLayout />
    </ThemeContext.Provider>
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
export { ThemeContext };
