import styled from "styled-components";
import signIcon from "../../assets/lijisign.png"
import map from "../../assets/map.svg"

export const StyledAboutPage = styled.div`
    padding-top: 40px;
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 42px;
    margin-bottom: 20px;
    text-transform: uppercase;
`

export const StyledContent = styled.div`
    margin: 0 20px;
`

export const StyledSecondaryTitle = styled.h2`
    color: #137d52;
    margin-bottom: 10px; 
`

export const StyledBlock = styled.div`
    margin: 40px 0 60px;
    @media screen and (max-width: 984px) {
        margin: 30px 0 40px;
    }
`

export const StyledImage = styled.img`
    @media screen and (max-width: 984px) {
        height: 200px;
    }
    @media screen and (max-width: 584px) {
        height: 160px;
    }
`

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

export const StyledNumbersText = styled(StyledText)`
    font-weight: 700;
    font-size: 24px;
`

export const StyledLeftText = styled(StyledText)`
    text-align: left;
`

export const StyledRightAlignText = styled(StyledLeftText)`
    text-align: right;
    background: url(${signIcon}) no-repeat right center;
    height: 100px;
`

export const StyledSignContainer = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const StyledFlex = styled.div`
    display: flex;
    margin: 40px 0;
    margin: 0 auto;
    max-width: 1100px;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const StyledCenterFlex = styled(StyledFlex)`
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;   
    }
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
    background-image: url(${map});
    background-size: contain;
    p {
        font-size: 92px;
        font-weight: 700;
    }
`

export const StyledHeadImage = styled.img`
    margin-left: 30px;
    object-fit: contain;
    @media screen and (max-width: 900px) {
        margin-left: 0;
    }
`

export const StyledMarginBottom = styled.div`
    margin-bottom: 20px;
    width: 100%;
`

export const StyledCertificates = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 40px;
    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`

export const StyledCertificateImg = styled.img`
    padding: 5px;
    cursor: pointer;
    /* width: 25%; */
    width: 269px;
`