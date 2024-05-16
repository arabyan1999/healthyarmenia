import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../components/carousel";
import ReferenceBlock from "../../components/referenceBlock";
import Feedback from "../../components/feedback";
import { CommonDiseases, foods, professors, threatmentData } from "../../data";
import tiensLogo from "../../assets/tiensLogo.jpg";
import tiensProductLogo from "../../assets/tiens-product.jpeg";
import tiensResultLogo from "../../assets/results.jpg";
import Booking from "../../components/booking";
import Chat from "../../components/chat";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(res => console.log("res ", res))
            .catch(error => {
                console.error("error ", error);
            });
    }, []);

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
            <ReferenceBlock blocks={threatmentData} />
            <Booking />
            <ReferenceBlock blocks={professors} />
            <Feedback />
            {/* <Chat /> */}
        </div>
    )
}

export default Home