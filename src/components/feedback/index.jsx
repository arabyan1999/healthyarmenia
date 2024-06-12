import React from "react";
import { useTranslation } from "react-i18next";
import FeedbackCarousel from "./feedbackCarousel";
import { feedbackData } from "../../data";
import { StyledContainer, StyledTitle } from "./styled";

function Feedback() {
    const { t } = useTranslation();
    return (
        <StyledContainer id="feedback">
            <StyledTitle>{t("customers_feedback")}</StyledTitle>
            <FeedbackCarousel feedbackData={feedbackData} />
        </StyledContainer>
    )
}

export default Feedback;