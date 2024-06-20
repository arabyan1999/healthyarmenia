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
        font-size: 25px;   
    }
`

export const StyledFirstTitle = styled(StyledTitle)`
    font-size: 34px;
    text-align: center;
    @media screen and (max-width: 600px) {
        font-size: 27px;
    }
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
    font-size: 22px;
    @media screen and (max-width: 700px) {
        font-size: 17px;
    }
`

export const StyledCentrelizedText = styled(StyledText)`
    text-align: center;
`

export const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`

export const StyledImg = styled.img`
    width: 400px;
    height: 300px;
    margin-left: 20px;
    @media screen and (max-width: 900px) {
        margin: 0 0 30px 0;
        width: 450px;
    }
    @media screen and (max-width: 900px) {
        margin: 0 auto 30px;
    }
    @media screen and (max-width: 520px) {
        margin: 0 0 30px 0;
        width: 100%;
        height: auto;
    }
`

export const StyledOl = styled.ol`

`