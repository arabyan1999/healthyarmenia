import React, { useState } from 'react';
import { StyledBlockUpperPart, StyledComment, StyledFeedackContainer, StyledFeedbackBlock, StyledFeedbackRef, StyledImageContainer } from './styled';

const FeedbackCarousel = ({ feedbackData }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  // };

  return (
    <StyledFeedackContainer>
      {/* <div> */}
      {feedbackData.map(el => (
        <StyledFeedbackBlock>
            <StyledBlockUpperPart>
                <StyledImageContainer>
                    <img src={el.image} />
                </StyledImageContainer>
                <div>
                    <h3>{el.name}</h3>
                    <p>{el.surname}</p>
                </div>
            </StyledBlockUpperPart>
            <StyledComment>
                <p>{el.comment}</p>
            </StyledComment>
        </StyledFeedbackBlock>
      ))}
      <StyledFeedbackRef href={"/feedback"}>Բոլոր մեկնաբանությունները {">"}</StyledFeedbackRef>
        {/* <StyledButtonConainer onClick={handlePrev}>{"<"}</StyledButtonConainer>
        <StyledButtonConainer onClick={handleNext}>{">"}</StyledButtonConainer> */}
      {/* </div> */}
    </StyledFeedackContainer>
  );
};

export default FeedbackCarousel;