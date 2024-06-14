import styled from "styled-components";

export const StyledProductContainer = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding-top: 20px;
    @media screen and (max-width: 1100px) {
        margin: 20px;
    }
`

export const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 36px;
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const StyledMobileTitle = styled(StyledTitle)`
    display: block;
    text-align: center;
    margin-bottom: 10px;
    font-size: 30px;
    @media screen and (min-width: 901px) {
        display: none;
    }
`

export const StyledProductUpperPart = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media screen and (max-width: 901px) {
        flex-direction: column;
    }
`

export const StyledProductUpperLeftPart = styled.div`
    margin-left: 40px;
    @media screen and (max-width: 901px) {
        margin-left: 0;
    }
`

export const StyledProductImg = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    @media screen and (max-width: 901px) {
        margin: 0 auto;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        height: auto;
    }
`

export const StyledContentText = styled.p`
    font-size: 16px;
    line-height: 22px;
    span {
        font-weight: 700;    
    }
`

export const StyledLineSpace = styled.div`
    margin: 30px 0;
`

export const StyledLine = styled(StyledLineSpace)`
    width: 100%;
    height: 1px;
    background-color: #888;
`

export const StyledLowerPart = styled.div`

`