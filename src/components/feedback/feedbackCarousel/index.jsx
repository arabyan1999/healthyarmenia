import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBlockUpperPart, StyledComment, StyledFeedackContainer, StyledFeedbackBlock, StyledFeedbackRef, StyledImageContainer } from './styled';
// import { ReactComponent as RightArrow } from "../../../assets/right-arrow-svgrepo-com.svg";

const FeedbackCarousel = ({ feedbackData }) => {
  const { t } = useTranslation();
  const Feedback = ({ el }) => (
    <StyledFeedbackBlock>
      <StyledBlockUpperPart>
        <StyledImageContainer>
          <img src={el.image} alt={el.image} />
        </StyledImageContainer>
        <div>
          <h3>{t(el.name)}</h3>
          <p>{t(el.city)}</p>
        </div>
      </StyledBlockUpperPart>
      <StyledComment>
        <p>{t(el.comment)}</p>
        <p>{el?.ps}</p>
      </StyledComment>
    </StyledFeedbackBlock>
  )

  return (
    <StyledFeedackContainer>
      {feedbackData.map((el, index) => {
        if (window.location.pathname !== "/feedback") {
          if (index <= 2) {
            return (
              <Feedback el={el} key={index} />
            )  
          }
          return;
        } else {
          return (
            <Feedback el={el} key={index} />
          )
        }
      })}
    </StyledFeedackContainer>
  );
};

export default FeedbackCarousel;