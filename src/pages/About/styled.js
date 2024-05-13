import styled from "styled-components";

export const StyledAboutPage = styled.div``

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 42px;
    margin-bottom: 20px;
`

export const StyledBlock = styled.div`
    margin: 40px 0 60px;
`

export const StyledImage = styled.img``

export const StyledBlockTitle = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
`

export const StyledText = styled.p`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
`

export const StyledLeftText = styled(StyledText)`
    text-align: left;
`

export const StyledFlex = styled.div`
    display: flex;
    margin: 40px 0;
    margin: 0 auto;
    max-width: 1100px;
`

export const StyledCenterFlex = styled(StyledFlex)`
    justify-content: space-around;
`

export const StyledCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
`

export const StyledCircle = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
    box-shadow: 3px 3px 16px 0px #888888;
    width: 300px;
    height: 300px;
    margin: 45px 0 30px;
    p {
        font-size: 74px;
        font-weight: 700;
    }
`

export const StyledHeadImage = styled.img`
    margin-left: 30px;
`