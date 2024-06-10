import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledBlock,  StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { foods } from "../../data";
import { StyledBackgroundTransparent, StyledButton, StyledNavigation, StyledProductsContainer, StyledProductsPage } from "./styled";
import Loader from "../../components/loader";
import { useScrollingElement } from "../../hooks/use-scrolling-element";

function ProductsPage() {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");
    const [filteredStat, setFilteredState] = useState(foods.array);
    const { t } = useTranslation();
    const navigate = useNavigate();
    useScrollingElement(loading);

    useEffect(() => {
        if (activeTab === "all") {
            setFilteredState(foods.array)
        } else {
            const f = foods.array.filter((el) => {
                return el?.filter.find((fil) => fil === activeTab)
            })
            setFilteredState(f);
        }
    }, [activeTab]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <StyledBackgroundTransparent>
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
                        filteredStat.map((product) => 
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
        </StyledBackgroundTransparent>
    )
}

export default ProductsPage;