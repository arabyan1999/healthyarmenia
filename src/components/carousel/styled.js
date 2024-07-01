import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 500px;
  @media screen and (max-width: 1000px) {
    height: 350px;
  }
  @media screen and (max-width: 700px) {
    height: 250px;
  }
  @media screen and (max-width: 442px) {
    height: 200px;
  }
`;

export const Slide = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  z-index: 1;

  ${(props) => (props.direction === 'prev' ? 'left: 0;' : 'right: 0;')}
`;