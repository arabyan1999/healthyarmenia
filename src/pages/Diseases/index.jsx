import React, { useEffect, useState } from "react";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle } from "./styled";
import { StyledBlock, StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { StyledBackgroundTransparent } from "../Products/styled";
import { useTranslation } from "react-i18next";
import { sliceText } from "../../helpers/helper";
import { getDiseasesApi } from "../../request/requests";
import { StyledCenterText, StyledRefButton } from "../Disease/styled";
import { ContactModal } from "../../components/nav/contactModal";

function DiseasesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const { t } = useTranslation();
    useScrollingElement(loading);
    const lang = localStorage.getItem("lang") || "am";

    useEffect(() => {
        setLoading(true);
        try {
            getDiseasesApi(lang)
                .then((res) => {
                    setData(res.data.data);
                    setLoading(false);
                    return res.json();
                })
                .catch((e) => console.log("disease e", e))
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
            <StyledDiseasesPage>
                <StyledMainTitle>{t("diseases")}</StyledMainTitle>
                <StyledCenterText>
                    <p>{t("below_some_examples_of_treatments")}</p>
                    <p>{t("thanks_to_tibetan_medicine_specialist")}</p>
                </StyledCenterText>
                <StyledCenterText>
                    {t("to_obtain_about")}{" "}
                    <StyledRefButton onClick={() => setModal(true)}>{t("register_with_the_link")}</StyledRefButton>
                </StyledCenterText>
                {modal && <ContactModal setModal={setModal} />}
                <StyledDiseasesContainer>
                    {
                        data.map((disease) => 
                            (
                                <StyledBlock key={disease.key} href={`/disease/${disease.key}`}>
                                    <StyledImage src={require(`../../assets/${disease.key}.jpg`)} />
                                    <StyledMenuTitle>{disease.name}</StyledMenuTitle>
                                    <p>{sliceText(disease.about, 17)}</p>
                                </StyledBlock>
                            )
                        )
                    }
                </StyledDiseasesContainer>
            </StyledDiseasesPage>
        </StyledBackgroundTransparent>
    )
}

export default DiseasesPage;