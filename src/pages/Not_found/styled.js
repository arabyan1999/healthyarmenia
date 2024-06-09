import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 153px);
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    .font {
        font-family: emoji;
    }
    h5 {
        letter-spacing: 2px;
        font-weight: 400;
    }
    h1 {
        font-size: 200px;
        line-height: 165px;
        font-weight: 500;
    }
    h3 {
        font-weight: 400;
    }
`