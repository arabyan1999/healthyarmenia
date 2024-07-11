import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledContentText, StyledLine, StyledProductUpperLeftPart, StyledProductContainer, StyledProductImg, StyledProductUpperPart, StyledTitle, StyledLowerPart, StyledLineSpace, StyledMobileTitle, StyledProductImgContainer } from "./styled";
import { getProductByKeyApi } from "../../request/requests";
import Loader from "../../components/loader";

function Product() {
    const { key } = useParams();
    const { t } = useTranslation();
    const [product, setProduct] = useState(null);
    const lang = localStorage.getItem("lang") || "am";

    useEffect(() => {
        getProductByKeyApi(key, lang)
            .then((res) => {
                setProduct(res.data.data[0]);
            })
            .catch((e) => console.log(e))
    }, [t]);

    if (!product) {
        return (
            <Loader />
        )
    }

    return (
        <StyledProductContainer>
            <StyledProductUpperPart>
                <StyledMobileTitle>{product.name}</StyledMobileTitle>
                <StyledProductImgContainer>
                    {!!product?.key && <StyledProductImg src={require(`../../assets/${product.key}.jpg`)} />}
                </StyledProductImgContainer>
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
                    {t(product.healingProperties)}
                </StyledContentText>
            </StyledLowerPart>
        </StyledProductContainer>
    )
}

export default Product;