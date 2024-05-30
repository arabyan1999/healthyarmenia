import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBlock,  StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { foods } from "../../data";
import { StyledProductsPage } from "./styled";
import Loader from "../../components/loader";

function ProductsPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    })

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <StyledProductsPage>
            {
                foods.array.map((product) => 
                        (
                            <StyledBlock key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                                <StyledImage src={product.image} />
                                <StyledMenuTitle>{product.name}</StyledMenuTitle>
                                <p>{product.shortTitle + "..."}</p>
                            </StyledBlock>
                        )
                )
            }
        </StyledProductsPage>
    )
}

export default ProductsPage;