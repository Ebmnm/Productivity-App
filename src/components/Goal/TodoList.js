import React from 'react'
import Todo from "./Todo"
export default function TodoList({goals, setgoals}) {

    function toggleTodo(id) {
        const newTodos = [...goals]
        const todo = newTodos.find(todo => todo.id ===id)
        todo.complete = !todo.complete
        setgoals(newTodos)
     }



    return (
        goals.map(goals => {
            return <Todo key={goals.id} goals={goals} toggleTodo={toggleTodo} setgoals={setgoals}  />
        })
    )
}
