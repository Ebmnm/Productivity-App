
import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import "./style.css"

const NavLink = styled(Link)`
font-size: 2rem;
color:white;
text-decoration:none;
width: auto;
padding:1em;
height: auto;
width: 33%;
display: flex;
justify-content: center;
` 

const NavContainer = styled.div`
display: flex;
justify-content:space-around;
border-bottom: 8px white solid;
align-items: center;
width: 100%;


`
export default function Nav() {
    return (
        <div>
            <NavContainer>
            <NavLink to="/"> Daily</NavLink>
            <NavLink to="/custom" className="side-border"> Custom</NavLink>
            <NavLink to="/long"> Long Term</NavLink>
            </NavContainer>
        </div>
    )
}
