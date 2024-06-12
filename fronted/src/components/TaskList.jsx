import React, { useState, useEffect } from 'react';
import api from '../api';
import TaskForm from './TasksForm';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('tasks/');
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTasks();
    }, []);

    const handleTaskCreate = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleTaskDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const tasksByTag = tasks.reduce((acc, task) => {
        (acc[task.tag] = acc[task.tag] || []).push(task);
        return acc;
    }, {});

    return (
        <div>
            <TaskForm onTaskCreate={handleTaskCreate} />
            {Object.entries(tasksByTag).map(([tag, tasks]) => (
                <div key={tag} className="task-list">
                    <h2>{tag}</h2>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onDelete={handleTaskDelete} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TaskList;