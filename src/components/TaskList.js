import React from 'react';
import axios from 'axios';
import './TaskList.css';

const API_URL = 'http://localhost:5000/api/tasks';

const TaskList = ({ tasks, setTasks }) => {
    const handleUpdateStatus = (taskId, newStatus) => {
        axios.patch(`${API_URL}/${taskId}`, { status: newStatus })
            .then(response => {
                setTasks(prevTasks => prevTasks.map(task => (task._id === taskId ? response.data : task)));
            })
            .catch(error => console.error('Error updating task status:', error));
    };

    const handleDeleteTask = (taskId) => {
        axios.delete(`${API_URL}/${taskId}`)
            .then(() => {
                setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div className="task-list-container">
            <h2 className="task-list-title">Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id} className="task-item">
                        <div className="task-title">{task.title}</div>
                        <p className="task-description">{task.description}</p>
                        <p className="task-status">Status: {task.status}</p>

                        <div className="action-buttons">
                            <button
                                type="button"
                                onClick={() => handleUpdateStatus(task._id, 'Done')}
                                className="action-button"
                            >
                                Mark as Done
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDeleteTask(task._id)}
                                className="action-button"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
