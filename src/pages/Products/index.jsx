import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledBlock,  StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { foods } from "../../data";
import { StyledBackgroundTransparent, StyledButton, StyledNavigation, StyledProductsContainer, StyledProductsPage, StyledTitle } from "./styled";
import Loader from "../../components/loader";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import { sliceText } from "../../helpers/helper";
import { getProductsApi } from "../../request/requests";

function ProductsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [activeTab, setActiveTab] = useState("all");
    // const [filteredState, setFilteredState] = useState(foods.array);
    const { t } = useTranslation();
    const navigate = useNavigate();
    useScrollingElement(loading);
    const lang = localStorage.getItem("lang") || "am";

    // useEffect(() => {
    //     if (activeTab === "all") {
    //         setFilteredState(foods.array)
    //     } else {
    //         const f = foods.array.filter((el) => {
    //             return el?.filter.find((fil) => fil === activeTab)
    //         })
    //         setFilteredState(f);
    //     }
    // }, [activeTab]);

    useEffect(() => {
        setLoading(true);
        try {
            getProductsApi(lang)
                .then((res) => {
                    console.log(res.data.data)
                    setData(res.data.data)
                })
                .catch((e) => console.log("products error", e))
                .finally(() => setLoading(false))
        } catch (e) {
            setLoading(false);
            throw e;
        }
    }, [t]);

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <StyledBackgroundTransparent>
            <StyledProductsPage>
                <StyledTitle>{t("keep_your_health")}</StyledTitle>
                {/* <StyledNavigation>
                    <StyledButton onClick={() => setActiveTab("all")} className={activeTab === "all" && "active"}>
                        {t("all")}
                    </StyledButton>
                    <StyledButton onClick={() => setActiveTab("forSportsmen")} className={activeTab === "forSportsmen" && "active"}>
                        {t("for_sportsmen")}
                    </StyledButton>
                    <StyledButton onClick={() => setActiveTab("forLoseWeight")} className={activeTab === "forLoseWeight" && "active"}>
                        {t("for_lose_weight")}
                    </StyledButton>
                </StyledNavigation> */}
                <StyledProductsContainer>
                    {
                        data.map((product) => 
                            (
                                <StyledBlock key={product.key} onClick={() => navigate(`/product/${product.key}`)}>
                                    {/* <StyledImage src={product.image} /> */}
                                    <StyledImage src={require(`../../assets/${product.key}.jpg`)} />
                                    <StyledMenuTitle>{product.name}</StyledMenuTitle>
                                    <p>{sliceText(t(product.function), 17)}</p>
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