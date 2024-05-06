import React, { useState } from "react";
import { StyledBookingForm, StyledFlex, StyledForm, StyledInput, StyledSubmitButton, StyledTitle } from "./styled";

function BookingForm() {
    const [data, setData] = useState({});

    const setNewData = (prevState, objectKey, objectValue) => {
        let newData = Object.assign({}, prevState);
        newData[objectKey] = objectValue;
        return newData;
    }

    return (
        <StyledBookingForm>
            <StyledTitle>
                Պատվիրել հետադարձ կապ
            </StyledTitle>
            <StyledForm>
                <StyledFlex>
                    <StyledInput
                        type="text"
                        placeholder="Անուն"
                        onChange={(e) => setData(prev => setNewData(prev, "name", e.target.value))}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Ազգնուն"
                        onChange={(e) => setData(prev => setNewData(prev, "surname", e.target.value))}
                    />
                </StyledFlex>
                <StyledFlex>
                    <StyledInput
                        type="text"
                        placeholder="Էլ. հասցե"
                        onChange={(e) => setData(prev => setNewData(prev, "email", e.target.value))}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Հեռախոսահամար"
                        onChange={(e) => setData(prev => setNewData(prev, "phone", e.target.value))}
                    />
                </StyledFlex>
                <StyledSubmitButton type="submit">
                    Պատվիրել
                </StyledSubmitButton>
            </StyledForm>
        </StyledBookingForm>
    )
}

export default BookingForm;