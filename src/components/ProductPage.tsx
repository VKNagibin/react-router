import React from "react";
import styled from "styled-components";
import {
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice
} from "./Product"

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

type ProductData = {
    product: {
        img: string,
        title: string,
        description: string,
        price: number,
        id: number,
    }
}

const ProductPage = (props: ProductData): JSX.Element => {
    return (
        <ProductWrapper>
            <ProductImage src={props.product.img}/>
            <ProductTitle>{props.product.title}</ProductTitle>
            <ProductDescription>{props.product.description}</ProductDescription>
            <ProductPrice>{props.product.price}</ProductPrice>
        </ProductWrapper>
    )
}

export default ProductPage;
