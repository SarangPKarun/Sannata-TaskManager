import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

export default function App() {
  const [taskList, settaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({})
  
  useEffect(() =>{
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className='App'>
      <div className='container'>
        <Header /> 
        <AddTask 
          taskList={taskList} 
          settaskList={settaskList}
          task={task}
          setTask={setTask}
          /> 
        <ShowTask 
          taskList={taskList} 
          settaskList={settaskList}
          task={task}
          setTask={setTask}
          /> 
      </div>
    </div>
  )
}

