import React from "react";
import FeedbackCarousel from "./feedbackCarousel";
import { feedbackData } from "../../data";
import { StyledContainer, StyledTitle } from "./styled";

function Feedback() {
    return (
        <StyledContainer id="feedback">
            <StyledTitle>Հաճախորդների կարծիքները</StyledTitle>
            <FeedbackCarousel feedbackData={feedbackData} />
        </StyledContainer>
    )
}

export default Feedback;