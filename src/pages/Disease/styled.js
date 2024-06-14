import styled from "styled-components";
import { StyledTitle } from "../Product/styled";

export const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding-top: 20px;
    @media screen and (max-width: 1100px) {
        margin: 20px;
    }
`

export const StyledImgContainer = styled.div`
    width: 400px;
    height: 300px;
    margin: 30px auto;
    img {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        height: auto;
    }
`

export const StyledMainTitle = styled(StyledTitle)`
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 30px;
    @media screen and (max-width: 900px) {
        display: block;
        margin: 0 0 10px;
    }
`

export const StyledBlock = styled.div`
    margin-bottom: 40px;
`

export const StyledBlockTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 20px;
`