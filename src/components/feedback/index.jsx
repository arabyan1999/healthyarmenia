import React from "react";
import FeedbackCarousel from "./feedbackCarousel";
import { feedbackData } from "../../data";

function Feedback() {
    return (
        <div>
            <FeedbackCarousel feedbackData={feedbackData} />
        </div>
    )
}

export default Feedback;