/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Todo from "../assets/pics/dart.png";
import "./TaskColumn.css";
import TaskCard from './TaskCard';

const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {

    // console.log(Todo);
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'> 
                <img className='task_column_icon' src={icon} alt="" 
                />
                {title}
                </h2>

                {tasks.map(
                (task, index) =>
                    task.status === status && (
                <TaskCard
                key={index}
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                />
             )
          )}
        </section>
    );
};

export default TaskColumn;