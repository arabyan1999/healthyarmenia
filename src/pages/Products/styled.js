import styled from "styled-components";
import { StyledContainer } from "../../components/referenceBlock/styled";

export const StyledProductsPage = styled(StyledContainer)`
    max-width: 1330px;
    margin: auto;
`

export const StyledNavigation = styled.div`
    margin-top: 30px;
    display: flex;
    border-radius: 5px;
    background-color: #b3ffb3;
    padding: 30px 15px;
`

export const StyledButton = styled.button`
    background: transparent;
    border: none;
    font-size: 22px;
    margin-right: 20px;
    font-weight: 700;
    &:hover  {
        text-decoration: underline;
    }
    &.active  {
        text-decoration: underline;
    }
`

export const StyledProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
`