import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:5000/api/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task Management Application</h1>

      <div>
        <TaskForm />
      </div>

      <div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default App;
