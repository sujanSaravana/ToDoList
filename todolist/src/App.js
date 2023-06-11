import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <div>
        <button onClick={toggleTheme} className='toggleBtn'>Toggle Theme</button>
      </div>  
    </div>
  );
}

export default App;
