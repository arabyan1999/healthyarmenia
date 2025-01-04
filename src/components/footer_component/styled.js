import styled from "styled-components";

export const StyledFoot = styled.div`
    text-align: center;
    padding: 20px;
    border-top: 1px solid #d8cfcf;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    @media screen and (max-width: 1170px) {
        flex-direction: column;
    }
`

export const StyledText = styled.p`
    margin-right: 45px;
    @media screen and (max-width: 1170px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`

export const StyledPhoneLink = styled.a`
    span {
        white-space:nowrap;
    }
    text-decoration: none
`