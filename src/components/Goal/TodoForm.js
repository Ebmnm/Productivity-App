import React, { useRef} from 'react'

import styled from 'styled-components'
import uuid from "uuidv4"


const Inputbutton = styled.button`
background-color: red;
`
export default function TodoForm({goals, setgoals}) {

const todoNameRef = useRef()

    function addTodo(e) {
        e.preventDefault()
        const name = todoNameRef.current.value
         if(name === "") return
         setgoals(prev => {
             return [...prev, {id: uuid(), name: name, complete: false, info:""}]
         })
         todoNameRef.current.value = null
     }

    function deleteCheckedTodo() {
        let newTodos = [...goals]
       newTodos = newTodos.filter(todo => {
        return todo.complete === false
        })
        setgoals(newTodos)
    }

    return (
        <div className="todo-form">
            <form>
            <input ref={todoNameRef} type="text" />
            <Inputbutton onClick={addTodo}>Add Goal</Inputbutton>
            </form>
            <button className="delete-button" onClick={deleteCheckedTodo}>Delete Checked Goals </button>
        </div>
    )
}
