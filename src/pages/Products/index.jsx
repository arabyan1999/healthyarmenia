import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledBlock,  StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { foods } from "../../data";
import { StyledButton, StyledNavigation, StyledProductsContainer, StyledProductsPage } from "./styled";
import Loader from "../../components/loader";
import { useScrollingElement } from "../../hooks/use-scrolling-element";

function ProductsPage() {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");
    const { t } = useTranslation();
    const navigate = useNavigate();
    useScrollingElement(loading);

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
            <StyledNavigation>
                <StyledButton onClick={() => setActiveTab("all")} className={activeTab === "all" && "active"}>
                    {t("all")}
                </StyledButton>
                <StyledButton onClick={() => setActiveTab("forSportsmen")} className={activeTab === "forSportsmen" && "active"}>
                    {t("for_sportsmen")}
                </StyledButton>
                <StyledButton onClick={() => setActiveTab("forLoseWeight")} className={activeTab === "forLoseWeight" && "active"}>
                    {t("for_lose_weight")}
                </StyledButton>
            </StyledNavigation>
            <StyledProductsContainer>
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
            </StyledProductsContainer>
        </StyledProductsPage>
    )
}

export default ProductsPage;