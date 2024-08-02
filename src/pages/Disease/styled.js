import styled from "styled-components";
import { StyledTitle } from "../Product/styled";

export const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 40px auto;
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

export const StyledCenterText = styled.p`
    text-align: center;
    padding-top: 40px;
    font-size: 18px;
    font-weight: 700;
`

export const StyledRefButton = styled.button`
    position: relative;
    border: unset;
    /* text-decoration: underline; */
    font-size: 18px;
    font-weight: 700;
    &::before {
        content: "";
        width: 100%;
        height: 2px;
        background: #000;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
`