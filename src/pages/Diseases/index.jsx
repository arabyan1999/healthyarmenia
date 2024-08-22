import React, { useEffect, useState } from "react";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle } from "./styled";
import { diseases } from "../../data";
import { StyledBlock, StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { StyledBackgroundTransparent } from "../Products/styled";
import { t } from "i18next";
import { sliceText } from "../../helpers/helper";
import { getDiseasesApi } from "../../request/requests";

function DiseasesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useScrollingElement(loading);
    const lang = localStorage.getItem("lang") || "am";

    useEffect(() => {
        try {
            getDiseasesApi(lang)
                .then((res) => {
                    setData(res.data.data);
                })
                .catch((e) => console.log("disease e", e))
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
            <StyledDiseasesPage>
                <StyledMainTitle>{diseases.title}</StyledMainTitle>
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