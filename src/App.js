import React from 'react';
import styled from "styled-components"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./components/style.css"

import TodoComplete from "./components/Todo/TodoComplete"
import TaskComplete from "./components/Task/TaskComplete"
import GoalComplete from "./components/Goal/GoalComplete"
//TODO: 
// style list/mobile
 


const Container = styled.div`
width: 70vw;
height: auto;
background-color: #2E2727;
margin:auto;
top:0;
left:15vw;
padding-bottom: 3%;
min-height:75vh;
`



function App() {


       
//runs twice due to useeffect
  return (
    
<Router>
<Container>
<Nav />
<Route path="/todo" exact  component={TodoComplete} />
<Route path="/custom" exact component={TaskComplete} />
<Route path="/long" exact component={GoalComplete} />
</Container>
</Router>

  );
}

export default App;
