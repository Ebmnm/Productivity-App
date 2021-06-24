import React  from 'react'


import "./style.css"


export default function Todo({todos, setTodos, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todos.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todos.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {todos.name}</p>
            </label>
        </div>
    )}
