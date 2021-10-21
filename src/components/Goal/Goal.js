import React, {useState, useRef}  from 'react'
import GoalInfo from './GoalInfo'

import "../style.css"

export default function Todo({goals, setgoals, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 

    function handleTodoClick() {
        toggleTodo(goals.id)
    }

    function createInfoPage(todo) {
        setInfo(true)
  }

    function openInfo() {
        //this goals is refering to the todo clicked    
        createInfoPage(goals)
    }

   function saveDate() {
    setgoals(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
    if(todoDate === "") { todoDate = "Enter Date"}
        goals.date = todoDate
            return newTodos
        })               
}
      
    return (
        <div  className="todo-container">
            <label className="todo-label">
                <input type="checkbox" checked={goals.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {goals.name}</p>
            </label>
           <input className="todo-input-date" type="text" placeholder= {goals.date ? `${goals.date}` : "Date"} onChange={saveDate}  ref={dateRef}/>
            <button className="info-button" onClick={openInfo}> Info </button>
        {info ? <GoalInfo goal={goals} key={goals.id} info={info} setInfo={setInfo} setgoals={setgoals}  /> : null}
        </div>
    )
    }

   