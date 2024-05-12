import styled from "styled-components";

export const StyledProductContainer = styled.div`
    max-width: 1100px;
    margin: 40px auto;
`

export const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 36px;
`

export const StyledProductUpperPart = styled.div`
    display: flex;
    margin-bottom: 40px;
`

export const StyledProductUpperLeftPart = styled.div`
    margin-left: 40px;
`

export const StyledProductImg = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
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