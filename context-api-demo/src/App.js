// App.js
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { MyComponent } from './MyComponent';

function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}

export default App;