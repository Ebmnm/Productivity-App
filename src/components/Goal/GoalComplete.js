import React, { useState, useEffect }  from 'react'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const LOCAL_STORAGE_KEY = "todoApp.goals"
export default function TodoComplete() {
    const [goals, setgoals] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setgoals(storedTodos)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
        }, [goals])


    return (
        <div>
            <TodoForm  goals={goals} setgoals={setgoals}/>
            <TodoList  goals={goals} setgoals={setgoals}/>
        </div>
    )
}
