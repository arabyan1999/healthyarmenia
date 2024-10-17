import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledBlock,  StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { StyledBackgroundTransparent, StyledProductsContainer, StyledProductsPage, StyledTitle } from "./styled";
import Loader from "../../components/loader";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import { sliceText } from "../../helpers/helper";
import { getProductsApi } from "../../request/requests";
import { StyledCenterText, StyledRefButton } from "../Disease/styled";
import { ContactModal } from "../../components/nav/contactModal";

function ProductsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const { t } = useTranslation();
    useScrollingElement(loading);
    const lang = localStorage.getItem("lang") || "am";

    useEffect(() => {
        setLoading(true);
        try {
            getProductsApi(lang)
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                    return res.json();
                })
                .catch((e) => {
                    console.log("products error", e);
                })
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
                <StyledCenterText>
                    <p>{t("tiens_products_are_made")}</p>
                    <p>{t("info_about_eco_food")}</p>
                </StyledCenterText>
                <StyledCenterText>
                    {t("to_obtain_about_product")}{" "}
                    <StyledRefButton onClick={() => setModal(true)}>{t("register_with_the_link")}</StyledRefButton>
                </StyledCenterText>
                {modal && <ContactModal setModal={setModal} />}
                <StyledProductsContainer>
                    {
                        data?.map((product) => 
                            (
                                <StyledBlock key={product.key} href={`/product/${product.key}`}>
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