import React, {useState, useRef}  from 'react'
import TodoInfo from './TodoInfo'

import "../style.css"


export default function Todo({goals, setgoals, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 


    function handleTodoClick() {
        toggleTodo(goals.id)
        console.log(goals)
    }


    function createInfoPage(todo) {
        setInfo(true)
 //how can we render this???
  }

    function openInfo() {
        //render a popup or we can make popup and use a class to show it.... for multiple though
        // each popup will need data inside it for each todo so we need to use its id, create one for each id 
        //create a info component?? append it to the page???
       
        //this goals is refering to the todo clicked    @@@@@@@@@@@
        createInfoPage(goals)
        
    }

   function saveDate() {
console.log(goals)
setgoals(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
        goals.date = todoDate
            return newTodos
        })               
}
      
  


    return (
        <div>
            <label>
                <input type="checkbox" checked={goals.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {goals.name}</p>
            </label>
           <input type="text" placeholder= {goals.date ? `${goals.date}` : "Date"} onChange={saveDate}  ref={dateRef}/>
            <button onClick={openInfo}> Info </button>
        {info ? <TodoInfo goal={goals} key={goals.id} info={info} setInfo={setInfo} setgoals={setgoals}  /> : null}
        </div>
    )
    }