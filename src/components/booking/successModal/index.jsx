import React from "react";
import successIcon from "../../../assets/success.svg";
import { StyledFlex, StyledImageContainer, StyledModal, StyledModalBackground, StyledText, StyledTitle } from "./styled";

function SuccessModal() {
    return (
        <StyledModalBackground>
            <StyledModal>
                <StyledFlex>
                    <StyledImageContainer>
                        <img src={successIcon} alt="success" />
                    </StyledImageContainer>
                    <div>
                        <StyledTitle>Success</StyledTitle>
                        <StyledText>You're booked call successfuly</StyledText>
                    </div>
                </StyledFlex>
            </StyledModal>
        </StyledModalBackground>
    )
}

export default SuccessModal;
