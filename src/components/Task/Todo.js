import React, {useState, useRef}  from 'react'
import TodoInfo from './TodoInfo'

import "../style.css"


export default function Todo({tasks, settasks, toggleTodo, setTodoInfo}) {
const [info, setInfo] = useState(false)
const dateRef = useRef()
 


    function handleTodoClick() {
        toggleTodo(tasks.id)
        console.log(tasks)
    }


    function createInfoPage(tasks) {
        setInfo(true)
 //how can we render this???
  }

    function openInfo() {
        //render a popup or we can make popup and use a class to show it.... for multiple though
        // each popup will need data inside it for each tasks so we need to use its id, create one for each id 
        //create a info component?? append it to the page???
       
        //this tasks is refering to the tasks clicked    @@@@@@@@@@@
        createInfoPage(tasks)
        
    }

   function saveDate() {
console.log(tasks)
settasks(prevTodos => {
    let newTodos = [...prevTodos]
    let todoDate = dateRef.current.value
        tasks.date = todoDate
            return newTodos
        })               
}
      
  


    return (
        <div>
            <label>
                <input type="checkbox" checked={tasks.complete} onChange={handleTodoClick} />
               <p className="todo-text"> {tasks.name}</p>
            </label>
           <input type="text" placeholder= {tasks.date ? `${tasks.date}` : "Date"} onChange={saveDate}  ref={dateRef}/>
            <button onClick={openInfo}> Info </button>
        {info ? <TodoInfo task={tasks} key={tasks.id} info={info} setInfo={setInfo} settasks={settasks}  /> : null}
        </div>
    )
    }