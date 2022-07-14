import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  font-size: 2rem;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  font-size: 4rem;
  justify-content: center;
  margin-bottom: 40px;
`

const NavBar = () => {
    return (
        <Navigation>
            <NavLink to="/" className="link" >Home</NavLink>
            <NavLink to="" className="link">Blog</NavLink>
        </Navigation>
    )
}

export default NavBar;