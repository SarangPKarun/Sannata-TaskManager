import React from 'react'

export const AddTask = ({taskList, settaskList ,task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.name){
        if(task.id){
          const date = new Date();
          const updateTaskList = taskList.map((todo) => (
            todo.id === task.id ? {id: task.id, name: e.target[0].value, time: date.toLocaleTimeString() + ' ' +date.toLocaleDateString()} : todo
          ))
          settaskList(updateTaskList);
          setTask({});
        }else{
          const date = new Date();
          const newTask = {
            id: date.getTime(), 
            name: e.target[0].value, 
            time: date.toLocaleTimeString() + ' ' +date.toLocaleDateString()
          }
        settaskList([...taskList, newTask])
        setTask({});
        // console.log(e.target.task.value);
      }
    }
}

  console.log(task)

  return (
    <div className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='task' autoComplete='off' placeholder='add task' maxLength='25' value={task.name || ""}  onChange={e => setTask({...task, name: e.target.value})}/>
        <button type='submit'>{task.id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )
}
