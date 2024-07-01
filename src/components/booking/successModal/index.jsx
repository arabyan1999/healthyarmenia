import React from "react";
import { useTranslation } from "react-i18next";
import successIcon from "../../../assets/success.svg";
import { StyledFlex, StyledImageContainer, StyledModal, StyledModalBackground, StyledText, StyledTitle } from "./styled";

function SuccessModal() {
    const { t } = useTranslation();
    return (
        <StyledModalBackground>
            <StyledModal>
                <StyledFlex>
                    <StyledImageContainer>
                        <img src={successIcon} alt="success" />
                    </StyledImageContainer>
                    <div>
                        <StyledTitle>{t("success")}</StyledTitle>
                        <StyledText>{t("booked_successfully")}</StyledText>
                        <StyledText>{t("specialist")}</StyledText>
                    </div>
                </StyledFlex>
            </StyledModal>
        </StyledModalBackground>
    )
}

export default SuccessModal;
