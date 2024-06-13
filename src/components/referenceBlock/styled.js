import styled from "styled-components";

export const StyledContainer = styled.div`
    margin:  60px 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    @media screen and (max-width: 1240px) {
        border-radius: 0; 
    }
    @media screen and (max-width: 600px) {
        padding: 20px 0; 
    }
`

export const StyledReferencesBlocks = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 20px 0;
    text-align: ${({ isProfessors }) => (isProfessors && "center")};
    justify-items: center;
    @media screen and (max-width: 1240px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 20px 20px;
    }
    @media screen and (max-width: 840px) {
        grid-template-columns: 100%;
    }
`

export const StyledMainTitle = styled.h2`
    margin-left: 20px;
    @media screen and (max-width: 840px) {
        margin-left: 0;
        text-align: center;
    }
    @media screen and (max-width: 500px) {
        font-size: 22px;
        margin: 0 20px;
    }
`

export const StyledMenuTitle = styled.h3`
    padding: 10px 0;
    margin-top: 10px;
    text-align: center;
    font-size: 22px;
`

export const StyledBlock = styled.div`
    width: 100%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.05);
        @media screen and (max-width: 700px) {
            transform: unset;
        }
    }
`

export const StyledRefBlock = styled.a`
    text-decoration: none;
    color: #000;
`

export const StyledRef = styled(StyledRefBlock)`
    color: #333;
    margin-right: 30px;
    line-height: 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    align-self: end;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 500px) {
        align-self: center;
        margin: 0;
    }
    svg {
        width: 10px;
        height: 10px;
    }
`

export const StyledImage = styled.img`
    width: ${({ isProfessors }) => (isProfessors ? "100%" : "100px")};
    height: ${({ isProfessors }) => (isProfessors ? "500px" : "100px")};
    margin: 0 auto;
    object-fit: cover;
    box-shadow: ${({ isProfessors }) => (!isProfessors && "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)")};
`