import styled from "styled-components";

export const StyledModalBackground = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledModal = styled.div`
    width: 500px;
    padding: 40px;
    border-radius: 5px;
    background-color: #fff;
    @media screen and (max-width: 500px) {
        width: 100%;
        margin: 0 20px;
    }
`

export const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledImageContainer = styled.div`
    margin-right: 16px;
    width: 79px;
    height: 79px;
`

export const StyledTitle = styled.h1`
    margin-bottom: 16px;
    text-align: left;
`

export const StyledText = styled.p`
    font-size: 18px;
`
