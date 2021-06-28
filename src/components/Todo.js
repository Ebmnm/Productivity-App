import React, {useState, useRef}  from 'react'
import TodoInfo from './TodoInfo'

import "./style.css"


export default function Todo({todos, setTodos, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 


    function handleTodoClick() {
        toggleTodo(todos.id)
        console.log(todos)
    }


    function createInfoPage(todo) {
        setInfo(true)
 //how can we render this???
  }

    function openInfo() {
        //render a popup or we can make popup and use a class to show it.... for multiple though
        // each popup will need data inside it for each todo so we need to use its id, create one for each id 
        //create a info component?? append it to the page???
       
        //this todos is refering to the todo clicked    @@@@@@@@@@@
        createInfoPage(todos)
        
    }

   function saveDate() {
console.log(todos)
setTodos(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
        todos.date = todoDate
            return newTodos
        })               
}
      
  


    return (
        <div>
            <label>
                <input type="checkbox" checked={todos.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {todos.name}</p>
            </label>
           <input type="text" placeholder= {todos.date ? `${todos.date}` : "Date"} onChange={saveDate}  ref={dateRef}/>
            <button onClick={openInfo}> Info </button>
        {info ? <TodoInfo todo={todos} key={todos.id} info={info} setInfo={setInfo} setTodos={setTodos}  /> : null}
        </div>
    )
    }