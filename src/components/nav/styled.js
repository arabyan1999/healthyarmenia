import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 999;
    width: 100%;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12);
    @media screen and (max-width: 500px) {
        padding: 17px 5px;
    }
`

export const StyledTitle = styled.h2`
    margin-left: 30px;
    height: 44px;
    svg path {
        fill: #137d52;
    }
    @media screen and (max-width: 500px) {
        height: 30px;
        margin-left: 0;
    }
`

export const StyledNavigationBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    @media only screen and (max-width: 1160px) {
        margin-right: 0;
    }
    .mobileLogo {
        @media only screen and (min-width: 1160px) {
            display: none;
        }
    }

    @media only screen and (max-width: 1159px) {
        flex-direction: column;
        position: fixed;
        top: 60px;
        bottom: 0;
        background: #fff;
        width: 100%;
        z-index: 999;
        padding: 20px 0;
        justify-content: start;
        right: ${({ is_open }) => !!is_open ? 0 : '-150%'};
        transition: all 0.5s ease;
        a, h2, div, button {
            margin: 0 0 12px 0;
        }
    }
`

export const StyledHomeLink = styled.a`
    color: #333;
    margin-right: 30px;
    text-decoration: none;
    height: fit-content;
    @media screen and (max-width: 500px) {
        svg {
            height: 30px;
        }
    }
`

export const StyledLink = styled(StyledHomeLink)`
    position: relative;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover::before {
        content: "";
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        bottom: -3px;
        left: 0;
    }
    &.active::before {
        content: "";
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
`

export const StyledButton = styled.button`
    background: transparent;
    border: none;
    font-size: 16px;
    color: #333;
    margin-right: 30px;
    position: relative;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover::before {
        content: "";
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        bottom: -3px;
        left: 0;
    }
    &.active::before {
        content: "";
        width: 100%;
        height: 2px;
        background: #333;
        position: absolute;
        bottom: -2px;
        left: 0;
    }
`

export const StyledBurger = styled.div`
    width: 30px;
    height: 22px;
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    .bar1, .bar2, .bar3 {
        width: 100%;
        height: 3px;
        background-color: #333;
        margin: 4px auto;
        transition: 0.4s;
    }

    .bar1 {
        transform: ${({ is_open }) => !!is_open && "rotate(-45deg) translate(-4px, 4px)"};
    }

    .bar2 {
        opacity: ${({ is_open }) => !!is_open && 0};
    }

    .bar3 {
        transform: ${({ is_open }) => !!is_open && "rotate(45deg) translate(-5px, -5px)"};
    }

    @media only screen and (min-width: 1159px) {
        display: none;
    }
`
