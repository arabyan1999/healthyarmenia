import React from "react";
import Carousel from "../../components/carousel";
import ReferenceBlock from "../../components/referenceBlock";
import Feedback from "../../components/feedback";
import { CommonDiseases, foods, professors } from "../../data";

import tiensLogo from "../../assets/tiensLogo.jpg";
import tiensProductLogo from "../../assets/tiens-product.jpeg";
import tiensResultLogo from "../../assets/results.jpg";

function Home() {
    const images = [
        tiensLogo,
        tiensProductLogo,
        tiensResultLogo
    ]

    return (
        <div>
            <Carousel images={images} />
            <ReferenceBlock blocks={CommonDiseases} />
            <ReferenceBlock blocks={foods} />
            <ReferenceBlock blocks={professors} />
            <Feedback />
        </div>
    )
}

export default Home