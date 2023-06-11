import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState("");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

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

  const add = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }])
      setNewTask("");
    }
  };



  return (
    <div className="App">
      <div>
        <button onClick={toggleTheme} className='toggleBtn'>Toggle Theme</button>
      </div>
      <div>
        <h1>To Do List</h1>
        <input value={newTask} onChange={e => setNewTask(e.target.value)}></input>
        <button onClick={add}>ADD</button>  
      </div>  
      <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
