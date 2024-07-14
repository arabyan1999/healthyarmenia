import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { CarouselWrapper} from "./styled"
import './Carousel.css';

function Carousel({ images }) {
  const [, setImageNum] = useState(1);

  return (
    <CarouselWrapper className="carousel">
      <SimpleImageSlider
        width="100%"
        height="100%"
        images={images}
        autoPlay={true}
        showBullets
        onStartSlide = {(index) => {
          setImageNum(index);
        }}
        autoPlayDelay={6}
        className="image-slider"
      />
      {/* <Image src={images[0]} alt='discount' /> */}
    </CarouselWrapper>
  );
}

export default Carousel;
