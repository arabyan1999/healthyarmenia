import styled from "styled-components";
import { StyledContainer } from "../../components/referenceBlock/styled";

export const StyledDiseasesPage = styled(StyledContainer)`
    max-width: 1330px;
    margin: 0 auto 40px;
    padding-top: 2px;
    @media screen and (max-width: 1300px) {
        max-width: 1200px;
    }
`

export const StyledMainTitle = styled.h2`
    text-align: center;
    margin: 30px 0;
`

export const StyledDiseasesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
    grid-gap: 20px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

export const StyledSecondaryTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`

export const StyledUlContainer = styled.div`
    background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
    box-shadow: 3px 3px 16px 0px #888888;
    padding: 40px 5px;
`

export const StyledUl = styled.ul`
    li {
        margin-left: 50px;
        padding: 5px 0;
        cursor: pointer;
        width: fit-content;
        &:hover {
            text-decoration: underline;
        }
    }
`
