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

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleDone = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };


  return (
    <div className="App">
      <div className='toggle-btn'>
        <button onClick={toggleTheme} className='toggleBtn'>Toggle Theme</button>
      </div>
      <div className='title'>
        <h1>Todo List</h1>
      </div>
      <div className='add-task'>
        <input value={newTask} onChange={e => setNewTask(e.target.value)} className='add-input'></input>
        <button onClick={add} className='add-btn'>ADD</button>  
      </div>
      <div className='list'>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              className='checkbox'
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className='dlt-btn'>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
