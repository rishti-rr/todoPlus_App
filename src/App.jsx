/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/pics/dart.png";
import doingIcon from "./assets/pics/stars.png";
import doneIcon from "./assets/pics/check-mark.png"
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  // console.log("tasks", tasks);
  return (
    <>
    <NavBar></NavBar>
    
    
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn 
          title='To do' 
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title='Doing' 
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn 
          title='Done' 
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
       
        {/* <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section> */}
      </main>
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;