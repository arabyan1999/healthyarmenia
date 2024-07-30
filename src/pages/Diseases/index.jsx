import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle, StyledSecondaryTitle, StyledUl, StyledUlContainer } from "./styled";
import { diseases } from "../../data";
import { StyledBlock, StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";
import { StyledBackgroundTransparent } from "../Products/styled";
import { t } from "i18next";
import { sliceText } from "../../helpers/helper";
import { getDiseasesApi } from "../../request/requests";

function DiseasesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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
            {/* <StyledTitle>Հիվանդություններ</StyledTitle> */}
                <StyledMainTitle>{diseases.title}</StyledMainTitle>
                {/* <p>{diseases.prologue}</p> */}
                <StyledDiseasesContainer>
                    {/* {diseases.typeOfDiseases.map(el => (
                            <StyledUlContainer key={el.id}>
                                <StyledSecondaryTitle>{el.category}</StyledSecondaryTitle>
                                <StyledUl>
                                    {
                                        el.diseases.map(diseas => (
                                            <li>{diseas.title}</li>
                                        ))
                                    }
                                </StyledUl>
                            </StyledUlContainer>
                    ))} */}
                    {
                        diseases.array.map((disease) => 
                            (
                                <StyledBlock key={disease.key} onClick={() => navigate(`/disease/${disease.key}`)}>
                                    {/* <StyledImage src={require(`../../assets/${disease.key}.jpg`)} /> */}
                                    <StyledImage src={disease.image} />
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