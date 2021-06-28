import React from 'react'
import Todo from "./Todo"
export default function TodoList({tasks, settasks}) {

    function toggleTodo(id) {
        const newTodos = [...tasks]
        const todo = newTodos.find(todo => todo.id ===id)
        todo.complete = !todo.complete
        settasks(newTodos)
     }



    return (
        tasks.map(tasks => {
            return <Todo key={tasks.id} tasks={tasks} toggleTodo={toggleTodo} settasks={settasks}  />
        })
    )
}
