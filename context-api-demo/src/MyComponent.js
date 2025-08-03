// MyComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const MyComponent = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>

      <h1>Current Theme: {theme}</h1>

      <button onClick={toggleTheme}>Toggle Theme</button>

    </div>

  );
};