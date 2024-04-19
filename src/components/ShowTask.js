import React from 'react'

export const ShowTask = ({taskList, settaskList, task, setTask}) => {

    const handleDelete =(id) => {
        const updateTaskList = taskList.filter(todo => todo.id !== id); 
        settaskList(updateTaskList);
    }

    const handleEdit =(id) => {
        const selectTask = taskList.find(todo => todo.id === id);
        setTask(selectTask);

    }


  return (
    <section className='showTask'>
      <div className='head'>
        <div>
            <span className='title'>Todo</span>
            <span className='countTask'>{taskList.length}</span>
        </div>
        <button className='clearAll' onClick={() => settaskList([])}>Clear All</button>
      </div>
      <ul>
        { taskList.map((todo) => (
            <li className='' key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                    <span className='timeDate'>{todo.time}</span>
                </p>
            <i className='bi bi-pencil-square' onClick={() => handleEdit(todo.id)}></i>
            <i className='bi bi-trash3-fill' onClick={() => handleDelete(todo.id)}></i>
            
        </li>
        ))}
        
      </ul>
    </section>
  )
}
