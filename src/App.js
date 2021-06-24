import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Nav from "./components/Nav"
import TodoList from "./components/TodoList"
import {BrowserRouter as Router} from "react-router-dom"
import "./components/style.css"
import TodoForm from './components/TodoForm';

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


       

  return (
<Router>
<Container>
<Nav />
{console.log("yoo")}
<TodoForm todos={todos} setTodos={setTodos} />
<TodoList todos={todos} setTodos={setTodos} />
</Container>

</Router>
  );
}

export default App;
