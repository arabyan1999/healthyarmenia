import React from 'react';
import { StyledBlockUpperPart, StyledComment, StyledFeedackContainer, StyledFeedbackBlock, StyledFeedbackRef, StyledImageContainer } from './styled';
import { ReactComponent as RightArrow } from "../../../assets/right-arrow-svgrepo-com.svg";

const FeedbackCarousel = ({ feedbackData }) => {
  const Feedback = ({ el }) => (
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
  )

  return (
    <StyledFeedackContainer>
      {feedbackData.map((el, index) => {
        if (window.location.pathname !== "/feedback") {
          if (index <= 2) {
            return (
              <Feedback el={el} />
            )  
          }
        } else {
          return (
            <Feedback el={el} />
          )
        }
      })}
      {(window.location.pathname !== "/feedback") ? (
        <StyledFeedbackRef href={"/feedback"}>Բոլոր մեկնաբանությունները <RightArrow /></StyledFeedbackRef>
      ) : null}
    </StyledFeedackContainer>
  );
};

export default FeedbackCarousel;