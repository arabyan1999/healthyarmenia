import React, { useState } from 'react';
import { CarouselWrapper, Slide, Image, Button } from "./styled"
import './Carousel.css';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <CarouselWrapper className="carousel">
      <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
      {images.map((image, index) => (
        <Slide key={index} className={index === currentImageIndex ? "slide active" : "slide"}>
          <Image src={image} objectFit="scale-down" alt={`Slide ${index}`} />
        </Slide>
      ))}
      <Button className="next" onClick={goToNextSlide}>&#10095;</Button>
    </CarouselWrapper>
  );
}

export default Carousel;
