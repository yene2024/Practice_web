import React from 'react';
import api from '../api';

function TaskItem({ task, onDelete }) {
    const handleDelete = async () => {
        try {
            await api.delete(`tasks/delete/${task.id}/`);
            onDelete(task.id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="task-item">
            <input type="checkbox" checked={task.completed} />
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TaskItem;