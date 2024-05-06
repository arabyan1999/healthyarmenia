import styled from "styled-components";

export const StyledContainer = styled.div`
    margin:  60px 0;
    display: flex;
    flex-direction: column;
`

export const StyledReferencesBlocks = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    flex-wrap: wrap;
    text-align: ${({ isProfessors }) => (isProfessors && "center")};
`

export const StyledMainTitle = styled.h2`

`

export const StyledMenuTitle = styled.h3`
    padding: 10px 0;
`

export const StyledBlock = styled.div`
    width: 400px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const StyledRef = styled.a`
    color: #333;
    margin-right: 30px;
    line-height: 40px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    align-self: end;
    &:hover {
        text-decoration: underline;
    }
`

export const StyledImage = styled.img`
    width: ${({ isProfessors }) => (isProfessors ? "100%" : "70px")};
    height: ${({ isProfessors }) => (isProfessors ? "500px" : "70px")};
    margin: 0 auto;
    object-fit: cover;
    box-shadow: ${({ isProfessors }) => (!isProfessors && "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)")};
`