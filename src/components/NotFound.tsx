import styled from "styled-components";

const Error404Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorContent = styled.h1`
  font-size: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const NotFound = (props: any ) => {
    return (
        <Error404Wrapper>
            <ErrorContent>404 Not Found</ErrorContent>
        </Error404Wrapper>
    )
}

export default NotFound;