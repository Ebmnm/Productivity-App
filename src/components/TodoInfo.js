import React, {useRef} from 'react'
import "./style.css"




export default function TodoInfo({todo, info, setInfo, setTodos}) {

const todoInfoRef = useRef()
 
function closeInfo() {
    setInfo(false)
}

function setTodoInfo(id) {
    let todoInfo = todoInfoRef.current.value
    if(todoInfo === "") return  
        setTodos(prevTodos => {
            let newTodos = [...prevTodos]
        todo.info = todoInfo
            return newTodos
        })               
}

    return (
        <>
      <h1 className="delete-button"> hi, {todo.info} </h1>
       <form>
       <input type="text" ref={todoInfoRef}/>
       </form>
       <button onClick={closeInfo} className="delete-button" > Close </button>
       <button onClick={setTodoInfo}> Set Info</button>
       </>
    )
}

