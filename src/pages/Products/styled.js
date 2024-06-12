import styled from "styled-components";
import { StyledContainer } from "../../components/referenceBlock/styled";

export const StyledProductsPage = styled(StyledContainer)`
    max-width: 1330px;
    margin: 40px auto;
`

export const StyledBackgroundTransparent = styled.div`
    background: transparent;
    padding-top: 1px;
    min-height: calc(100vh - 160px);
    @media screen and (max-width: 1330px) {
        padding-top: 0;
    }
`

export const StyledTitle = styled.h2`
    text-align: center;
`

export const StyledNavigation = styled.div`
    margin-top: 30px;
    display: flex;
    border-radius: 5px;
    background-color: #137d52;
    padding: 20px 15px;
    @media screen and (max-width: 810px) {
        justify-content: center;
    }
    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: start;   
    }
`

export const StyledButton = styled.button`
    background: transparent;
    border: none;
    font-size: 22px;
    margin-right: 20px;
    font-weight: 700;
    color: #fff;
    position: relative;
    &:hover::before {
        content: "";
        width: 100%;
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
    &.active::before {
        content: "";
        width: 100%;
        height: 1px;
        background: #fff;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
    @media screen and (max-width: 810px) {
        margin: 0 10px; 
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
    @media screen and (max-width: 500px) {
        margin: 10px 0;   
    }
`

export const StyledProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`