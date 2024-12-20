import styled from "styled-components";

export const StyledFeedackContainer = styled.div`
    background: #b3ffb3;
    height: 300px;
    padding: 40px;
    display: flex;
    justify-content: center;
`

export const StyledFeedbackBlock = styled.div`
    max-width: 400px;
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
    background: #fff;
    padding: 10px;
    border-radius: 5px;
`

export const StyledButtonConainer = styled.button`
    background: #fff;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;
    width: 30px;
    height: 30px;
`