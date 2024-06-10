import styled from "styled-components";
import { StyledRef } from '../../referenceBlock/styled';

export const StyledFeedackContainer = styled.div`
    background: #137d52;
    padding: 40px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 800px) {
        padding: 40px 60px;
    }
    @media screen and (max-width: 500px) {
        padding: 0;
    }
`

export const StyledFeedbackBlock = styled.div`
    margin-bottom: 40px;
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    @media screen and (max-width: 500px) {
        margin: 0;
        border-radius: 0;
    }
`


export const StyledBlockUpperPart = styled.div`
    display: flex;
    align-items: center;
`

export const StyledImageContainer = styled.div`
    border: 1px solid #333;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    padding: 4px;
    margin-right: 20px;
    background: #fff;
    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-size: cover;
    }
`

export const StyledComment = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    /* background: #fff; */
    padding: 10px;
    /* border-radius: 5px; */
`

export const StyledButtonConainer = styled.button`
    background: #fff;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;
    width: 30px;
    height: 30px;
`

export const StyledFeedbackRef = styled(StyledRef)`
    color: #fff;
    width: max-content;
    svg {
        height: 10px;
        width: 10px;
        path {
            fill: #fff;
        }
    }
    @media screen and (max-width: 500px) {
        color: #000;
        background-color: #fff;
        margin: 0;
        width: 100%;
        text-align: center;
        padding: 20px 0;
    }
`