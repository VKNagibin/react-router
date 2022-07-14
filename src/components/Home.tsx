import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Product from "./Product";

const ListWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`

interface IProps {
    products: {
        img: string;
        title: string;
        price: number;
        description: string;
        id: number;
    }[];
    handleClick: (id: number) => void;
}

const Home = (props: IProps): JSX.Element => {
    const clickHandler = (id: number) => {
        props.handleClick(id);
    }

    return (
        <ListWrapper>
            {
                props.products.map(item => (
                    <Product img={item.img} title={item.title} price={item.price} description={item.description} key={nanoid()} id={item.id} clickHandler={clickHandler} />
                ))

            }
        </ListWrapper>
    )
}

export default Home;