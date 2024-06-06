import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: 60px auto 0;
    @media screen and (max-width: 1200px) {
        margin: 40px 20px 0;
    }
`

export const StyledTitle = styled.h1`
    margin-bottom: 20px;
    @media screen and (max-width: 700px) {
        font-size: 26px;   
    }
`

export const StyledFirstTitle = styled(StyledTitle)`
    font-size: 34px;
    text-align: center;
`

export const StyledSecondaryTitle = styled.h3`
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
`

export const StyledBlock = styled.div`
    margin-bottom: 40px;
`

export const StyledText = styled.h3`
    margin-bottom: ${({ mb }) => mb && "10px"};
    font-weight: 400;
    font-size: 20px;
    @media screen and (max-width: 700px) {
        font-size: 16px;
    }
`

export const StyledCentrelizedText = styled(StyledText)`
    text-align: center;
`