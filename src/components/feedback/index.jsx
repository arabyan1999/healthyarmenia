import React from "react";
import FeedbackCarousel from "./feedbackCarousel";
import { feedbackData } from "../../data";
import { StyledContainer } from "./styled";

function Feedback() {
    return (
        <StyledContainer>
            <FeedbackCarousel feedbackData={feedbackData} />
        </StyledContainer>
    )
}

export default Feedback;