import React from "react";
import styled from "styled-components";
import { StyledModal, StyledModalBackground } from "../../booking/successModal/styled";
import BookingForm from "./../../booking/bookingForm/index";
import { ReactComponent as CloseButton } from "../../../assets/closeIcon.svg"

export const ContactModal = ({ setModal }) => {
    return (
        <StyledModalBackground>
            <StyledModal>
                <StyledFormContainer>
                    <button onClick={() => setModal(false)}>
                        <CloseButton />
                    </button>
                    <BookingForm setModal={setModal} />
                </StyledFormContainer>
            </StyledModal>
        </StyledModalBackground>
    )
}

const StyledFormContainer = styled.div`
    position: relative;
    > div {
        padding: 0;
    }
    > button {
        position: absolute;
        right: -13px;
        top: -17px;
        background: transparent;
        border: none;
    }
`