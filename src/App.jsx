/* eslint-disable no-unused-vars */
import React from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className='app_main'>
        <TaskColumn/>
        <TaskColumn/>
        <TaskColumn/>
       
        {/* <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section> */}
      </main>
    </div>
  );
};

export default App;