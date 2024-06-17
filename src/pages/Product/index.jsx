import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { foods } from "../../data";
import { useTranslation } from "react-i18next";
import { StyledContentText, StyledLine, StyledProductUpperLeftPart, StyledProductContainer, StyledProductImg, StyledProductUpperPart, StyledTitle, StyledLowerPart, StyledLineSpace, StyledMobileTitle } from "./styled";
import { getProductByIdApi } from "../../request/requests";

function Product() {
    const { id } = useParams();
    const { t } = useTranslation();
    const product = foods.array.find((itm) => itm.id === id);

    useEffect(() => {
        const getProduct = () => (
            getProductByIdApi(1)
        )

        getProduct();
    }, []);

    return (
        <StyledProductContainer>
            <StyledProductUpperPart>
                <StyledMobileTitle>{product.name}</StyledMobileTitle>
                <StyledProductImg src={product.image} />
                <StyledProductUpperLeftPart>
                    <StyledTitle>{product.name}</StyledTitle>
                    <StyledLine />
                    <StyledContentText><span>{t("category_title")}:</span> {t(product.category)}</StyledContentText>
                    <StyledLine />
                    <StyledContentText>
                        <span>{t("compound_title")}: </span>
                        {t(product.compound)}
                    </StyledContentText>
                </StyledProductUpperLeftPart>
            </StyledProductUpperPart>
            <StyledLowerPart>
                <StyledContentText>
                    <span>{t("function_title")}: </span>
                    {t(product.function)}
                </StyledContentText>
                <StyledLineSpace />
                <StyledContentText>
                    <span>{t("healing_properties_title")}: </span>
                    {t(product.healing_properties)}
                </StyledContentText>
            </StyledLowerPart>
        </StyledProductContainer>
    )
}

export default Product;