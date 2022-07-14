import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductWrapper = styled.li`
  will-change: transform;
  list-style: none;
  background: rgba(121, 121, 121, .2);
  border-radius: 10px;
  padding: 20px;
  flex-basis: 200px;
  width: 200px;
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: .3s;
  
  &:hover {
    transform: scale(1.1);
  }
`

const ProductLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`

const ProductImage = styled.img`
  display: block;
  width: 80px;
  height: 80px;
`

const ProductTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const ProductDescription = styled.p`
  text-align: center;
`

const ProductPrice = styled.span`
  display: block;
  font-size: 3rem;
  color: blueviolet;
  margin-top: auto;
`

interface IProps {
    img: string;
    title: string;
    price: number;
    description: string;
    id: number;
    clickHandler: (id: number) => void;
}

const Product = (props: IProps): JSX.Element => {
    const handleClick = () => {
        props.clickHandler(props.id);
    }

    return (
        <ProductWrapper>
            <ProductLink to={`/about/${String(props.id)}`} onClick={handleClick}/>
            <ProductImage src={props.img} />
            <ProductTitle>{props.title}</ProductTitle>
            <ProductDescription>{props.description}</ProductDescription>
            <ProductPrice>{props.price}</ProductPrice>
        </ProductWrapper>
    )
}

export {
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice
}

export default Product;
