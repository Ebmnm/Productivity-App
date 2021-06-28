import React, { useState, useEffect }  from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const LOCAL_STORAGE_KEY = "todoApp.tasks"
export default function TodoComplete() {
    const [tasks, settasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) settasks(storedTasks)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
        }, [tasks])


    return (
        <div>
            <TodoForm  tasks={tasks} settasks={settasks}/>
            <TodoList  tasks={tasks} settasks={settasks}/>
        </div>
    )
}
