import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import ReferenceBlock from "../../components/referenceBlock";
import Feedback from "../../components/feedback";
import { diseases, foods } from "../../data";
import tiensProductLogo from "../../assets/tiens-product.jpeg";
import t1 from "../../assets/t2.jpg";
import t2 from "../../assets/t4.jpg";
import t3 from "../../assets/TiensImage.webp";
import t4 from "../../assets/tiens_nice_2_0.jpg";
import Booking from "../../components/booking";
import Foreword from "../../components/foreword";
import { StyledContainer } from "./styled";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";

function Home() {
    const images = [
        t1,
        tiensProductLogo,
        // t2,
        t4,
        t3,
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
                <ReferenceBlock blocks={foods} link="product" />
                <ReferenceBlock blocks={diseases} link="disease" />
                {/* <ReferenceBlock blocks={threatmentData} /> */}
                <Booking />
                {/* <ReferenceBlock blocks={professors} /> */}
                <Feedback />
            </StyledContainer>
        </div>
    )
}

export default Home