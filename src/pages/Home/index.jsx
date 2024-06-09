import React, { useEffect } from "react";
import Carousel from "../../components/carousel";
import ReferenceBlock from "../../components/referenceBlock";
import Feedback from "../../components/feedback";
import { CommonDiseases, foods } from "../../data";
import tiensLogo from "../../assets/tiensLogo.jpg";
import tiensProductLogo from "../../assets/tiens-product.jpeg";
import tiensResultLogo from "../../assets/results.jpg";
import Booking from "../../components/booking";
import Foreword from "../../components/foreword";
import { StyledContainer } from "./styled";
import FourReason from "../../components/fourReasons";

function Home() {
    const images = [
        tiensLogo,
        tiensProductLogo,
        tiensResultLogo
    ]

    return (
        <div>
            <Carousel images={images} />
            <StyledContainer>
                <Foreword />
                <FourReason />
                <ReferenceBlock blocks={CommonDiseases} link="diseases" />
                <ReferenceBlock blocks={foods} link="products" />
                {/* <ReferenceBlock blocks={threatmentData} /> */}
                <Booking />
                {/* <ReferenceBlock blocks={professors} /> */}
                <Feedback />
            </StyledContainer>
        </div>
    )
}

export default Home