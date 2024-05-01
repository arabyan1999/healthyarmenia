import React, { useState } from 'react';
import { StyledBlockUpperPart, StyledButtonConainer, StyledComment, StyledFeedackContainer, StyledFeedbackBlock, StyledImageContainer } from './styled';

const FeedbackCarousel = ({ feedbackData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  return (
    <StyledFeedackContainer>
        <div>
            <StyledFeedbackBlock>
                <StyledBlockUpperPart>
                    <StyledImageContainer>
                        <img src={feedbackData[currentIndex].image} />
                    </StyledImageContainer>
                    <div>
                        <h3>{feedbackData[currentIndex].name}</h3>
                        <p>{feedbackData[currentIndex].surname}</p>
                    </div>
                </StyledBlockUpperPart>
                <StyledComment>
                    <p>{feedbackData[currentIndex].comment}</p>
                </StyledComment>
            </StyledFeedbackBlock>
            <StyledButtonConainer onClick={handlePrev}>{"<"}</StyledButtonConainer>
            <StyledButtonConainer onClick={handleNext}>{">"}</StyledButtonConainer>
        </div>
    </StyledFeedackContainer>
  );
};

export default FeedbackCarousel;