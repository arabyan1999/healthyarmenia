import React from "react";
import { useTranslation } from "react-i18next";
import errorIcon from "../../../assets/incorrect_icon.svg";
import { StyledFlex, StyledImageContainer, StyledModal, StyledModalBackground, StyledText, StyledTitle } from "../successModal/styled";

function ErrorModal() {
    const { t } = useTranslation();
    return (
        <StyledModalBackground>
            <StyledModal>
                <StyledFlex>
                    <StyledImageContainer>
                        <img src={errorIcon} alt="success" />
                    </StyledImageContainer>
                    <div>
                        <StyledTitle>{t("error")}</StyledTitle>
                        <StyledText>{t("something_went_rong")}</StyledText>
                    </div>
                </StyledFlex>
            </StyledModal>
        </StyledModalBackground>
    )
}

export default ErrorModal;
