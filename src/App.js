import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Nav from "./components/Nav"
import TodoList from "./components/TodoList"
import {BrowserRouter as Router} from "react-router-dom"
import "./components/style.css"
import TodoForm from './components/TodoForm';


//TODO: 
// style list/mobile
//create routes in the nav and find out how to use the same functionallity with different state... copy everything but change state keyword todo??
//how will we use diferent functionallity with the different routes? put it all in one component?
const LOCAL_STORAGE_KEY = "todoApp.todos"

const Container = styled.div`
width: 70vw;
height: 80vh;
background-color: black;
margin:auto;
position: absolute;
top:0;
left:15vw;
`

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
    }, [])
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        }, [todos])


       
//runs twice due to useeffect
  return (
<Router>
<Container>
<Nav />
<TodoForm todos={todos} setTodos={setTodos} />
<TodoList todos={todos} setTodos={setTodos} />
</Container>

</Router>
  );
}

export default App;
