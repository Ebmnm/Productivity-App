import React, { useRef} from 'react'

import styled from 'styled-components'
import uuid from "uuidv4"


const Inputbutton = styled.button`
background-color: red;
`
export default function TodoForm({tasks, settasks}) {

const todoNameRef = useRef()

    function addTodo(e) {
        e.preventDefault()
        const name = todoNameRef.current.value
         if(name === "") return
         settasks(prev => {
             return [...prev, {id: uuid(), name: name, complete: false, info:""}]
         })
         todoNameRef.current.value = null
     }

    function deleteCheckedTodo() {
        let newTodos = [...tasks]
       newTodos = newTodos.filter(todo => {
        return todo.complete === false
        })
        settasks(newTodos)
    }

    return (
        <div className="todo-form">
            <form>
            <input ref={todoNameRef} type="text" />
            <Inputbutton onClick={addTodo}>Add Task</Inputbutton>
            </form>
            <button className="delete-button" onClick={deleteCheckedTodo}>Delete Checked Tasks </button>
        </div>
    )
}
