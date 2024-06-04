import styled from "styled-components";
import { StyledContainer } from "../../components/referenceBlock/styled";

export const StyledProductsPage = styled(StyledContainer)`
    max-width: 1330px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding-top: 20px;
`