import React from 'react';
import styled from "styled-components";
import Home from "./Home";
import NavBar from "./Navbar";
import NotFound from "./NotFound";
import {useState} from "react";
import {Route, Routes, Link} from "react-router-dom";
import ProductPage from "./ProductPage";


const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginButton = styled.button`
  position: absolute;
  top: 20px;
  width: 200px;
  padding: 40px;
  border-radius: 20px;
  height: 50px;
  right: 10%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 2rem;
  align-items: center;

  &.logined {
    background: white;
    border: 2px solid rgba(121, 121, 121, .2);
  }

`

type ProdArray = {
    img: string,
    title: string,
    description: string,
    price: number,
    id: number,
}[];

let productsArray: ProdArray = [
    {
         img: 'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg',
         title: "Lorem ipsum",
         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, blanditiis consequatur culpa dicta earum exercitationem nemo odit quas quasi rem repellat",
         price: 1500,
         id: 0,
    },
    {
        img: 'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg',
        title: "ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, blanditiis consequatur" ,
        price: 200,
        id: 1,
    }
]

function App() {
    const [id, setId] = useState<number>(0);
    const [isAuth, setAuth] = useState<boolean>(false);

    const handleClick = (id: number): void => {
        setId(id);
    }

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAuth(!isAuth);
    }

  return (
      <AppWrapper>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home products={productsArray} handleClick={handleClick} />} />
            <Route path="/about/:id" element={<ProductPage product={productsArray[id]} />} />
            <Route path="" element={<NotFound />} />
          </Routes>
          <LoginButton className={`link ${ isAuth ? "logined": ''}`} onClick={handleLogin}>Login</LoginButton>
      </AppWrapper>
  );
}

export default App;
