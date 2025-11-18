import React from "react";
import FeedbackCarousel from "./feedbackCarousel";
import { feedbackData } from "../../data";
import { StyledContainer, StyledTitle } from "./styled";
import { useTranslation } from "react-i18next";

function Feedback() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <StyledTitle>{t("customers_feedback")}</StyledTitle>
            <FeedbackCarousel feedbackData={feedbackData} />
        </StyledContainer>
    )
}

export default Feedback;