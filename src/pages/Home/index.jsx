import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import ReferenceBlock from "../../components/referenceBlock";
import Feedback from "../../components/feedback";
import { CommonDiseases, foods } from "../../data";
import tiensLogo from "../../assets/tiensLogo.jpg";
import tiensProductLogo from "../../assets/tiens-product.jpeg";
// import tiensResultLogo from "../../assets/results.jpg";
import Booking from "../../components/booking";
import Foreword from "../../components/foreword";
import { StyledContainer } from "./styled";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";

function Home() {
    const images = [
        tiensProductLogo,
        tiensLogo,
        // tiensResultLogo
    ]

    const [loading, setLoading] = useState(true);
    useScrollingElement(loading);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    })

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <Carousel images={images} />
            <StyledContainer>
                <Foreword />
                <ReferenceBlock blocks={foods} link="products" />
                <ReferenceBlock blocks={CommonDiseases} link="diseases" />
                {/* <ReferenceBlock blocks={threatmentData} /> */}
                <Booking />
                {/* <ReferenceBlock blocks={professors} /> */}
                <Feedback />
            </StyledContainer>
        </div>
    )
}

export default Home