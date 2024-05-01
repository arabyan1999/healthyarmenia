import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
`

export const StyledTitle = styled.h2`
    margin-left: 30px;
`

export const StyledNavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLink = styled.a`
    color: #333;
    margin-right: 30px;
    line-height: 40px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
