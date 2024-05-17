import styled from "styled-components";

export const StyledBookingForm = styled.div`
    padding: 50px 35px;
    text-align: center;
    background-color: #fff;
    width: fit-content;
`

export const StyledTitle = styled.h2`
    margin-bottom: 16px;
`

export const StyledForm = styled.form``

export const StyledInput = styled.input`
    background-color: #ccc;
    border-radius: 5px;
    border: none;
    padding: .5rem;
    margin: 5px;
    width: 100%;
    @media screen and (max-width: 550px) {
        margin: 0 0 16px 0;
    }
`

export const StyledFlex = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 12px;
    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
    }
`

export const StyledSubmitButton = styled.button`
    border-radius: 5px;
    width: 100%;
    border: none;
    background-color: #b3ffb3;
    padding: .5rem;
`
