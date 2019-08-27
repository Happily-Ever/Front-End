import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Login from "./Login.js";
import Logo from "./img/logo.png";

const Bar = styled.div`
max-width: 1440px;
width: 100%;
margin: 20px auto 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
background: rgba(0, 163, 255, 0.8);
padding: 0 20px;
position: fixed;
align-content: space-between;
border: 1px solid rgba(0, 162, 255, 0.945);
`

const H1 = styled.h1`
font-family: 'Tangerine', cursive;
font-weight: bold;
font-size: 3rem;
`

const Nav = styled.nav`
display: flex;
width: 275px;
justify-content: space-between;
`

export default function NavBar(){
    return(
        <Bar>
        <Link to="index.html"><H1>HappilyEver</H1></Link>
        <img src={Logo} alt={"HappilyEver Logo"}/>
        <Nav>
            <Link to="#">About Me</Link>
            <Link to={Login}>Login</Link>
        </Nav>
        </Bar>
    )
}