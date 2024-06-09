import styled from "styled-components";
import { StyledContainer } from "../../components/referenceBlock/styled";

export const StyledProductsPage = styled(StyledContainer)`
    max-width: 1330px;
    margin: 60px auto;
`

export const StyledBackgroundTransparent = styled.div`
    background: transparent;
    padding-top: 40px;
`

export const StyledNavigation = styled.div`
    margin-top: 30px;
    display: flex;
    border-radius: 5px;
    background-color: #137d52;
    padding: 30px 15px;
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
`

export const StyledProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
`