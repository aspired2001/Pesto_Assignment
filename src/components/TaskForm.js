import React, { useState } from 'react';
import axios from 'axios';
import './TaskForm.css';

const API_URL = 'http://localhost:5000/api/tasks';

const TaskForm = ({ setTasks }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '', status: '' });

    const handleCreateTask = () => {
        axios.post(API_URL, newTask)
            .then(response => {
                setTasks(prevTasks => [...prevTasks, response.data]);
                setNewTask({ title: '', description: '', status: '' });
            })
            .catch(error => console.error('Error creating task:', error));
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create a New Task</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
                    <input
                        type="text"
                        id="status"
                        value={newTask.status}
                        onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                        className="form-input"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleCreateTask}
                    className="form-button"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
