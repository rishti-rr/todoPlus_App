/* eslint-disable no-unused-vars */
import React from 'react';
import Todo from "../assets/pics/dart.png";
import "./TaskColumn.css";

const TaskColumn = () => {
    console.log(Todo);
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'> 
                <img className='task_column_icon' src={Todo} alt="" /> To Do</h2>
        </section>
    );
};

export default TaskColumn;