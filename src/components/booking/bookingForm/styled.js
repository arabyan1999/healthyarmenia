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
    background-color: #dedede;
    border-radius: 5px;
    border: none;
    padding: .5rem;
    margin: 5px;
    width: 100%;
    &.input::placeholder {
        color: #777;
    }
    @media screen and (max-width: 550px) {
        margin: 0 0 16px 0;
    }
`

export const StyledSelect = styled.select`
    background-color: #dedede;
    border-radius: 5px;
    border: none;
    padding: .5rem;
    margin: 5px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    @media screen and (max-width: 550px) {
        margin: 0 0 16px 0;
    }
`

export const StyledCustomSelect = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 5px;
    text-align: left;
`

export const StyledSelected = styled.div`
    background-color: #dedede;
    color: #777;
    padding: .5rem;
    cursor: pointer;
    border-radius: 5px;
`

export const SelectItems = styled.div`
    position: absolute;
    /* display: none; */
    background-color: #d88181;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 1;
    width: 100%;
    div {
        padding: 10px;
        cursor: pointer;
    }
    div:hover {
        background-color: #c69c9c;
    }
`

export const StyledOption = styled.option`
    padding: 5px 0;
    cursor: pointer;
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

export const StyledBlockFlex = styled(StyledFlex)`
    justify-content: space-between;
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    background-color: #dedede;
    border-radius: 5px;
    border: none;
    padding: .5rem;
    margin: 5px;
    resize: none;
    &.input::placeholder {
        color: #777;
    }
`

export const StyledSubmitButton = styled.button`
    border-radius: 5px;
    width: 100%;
    border: none;
    background-color: #b3ffb3;
    padding: .5rem;
    margin: 5px;
`
