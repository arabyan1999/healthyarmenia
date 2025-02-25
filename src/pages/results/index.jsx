import React from "react";
import { useTranslation } from "react-i18next";
import PsoryazResult1 from "../../assets/psoryaz_result_1.jpg";
import PsoryazResult2 from "../../assets/psoryaz_result_2.jpg";
import PsoryazResult3 from "../../assets/psoryaz_result_3.jpg";
import PsoryazResult4 from "../../assets/psoryaz_result_4.jpg";
import vaskulit from "../../assets/vaskulit.jpg";
import ekzema from "../../assets/ekzema.jpg";
import { StledImg, StyledContainer, StyledImageContainer, StyledResultContainer, StyledReultTitle, StyledTitle } from "./styled";

function Results() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <StyledTitle>{t("treatment_results")}</StyledTitle>
            <StyledResultContainer>
                <StyledReultTitle>{t("psoriasis")}</StyledReultTitle>
                <StyledImageContainer>
                    <StledImg src={PsoryazResult1} alt="" />
                    <StledImg src={PsoryazResult2} alt="" />
                    <StledImg src={PsoryazResult3} alt="" />
                    <StledImg src={PsoryazResult4} alt="" />
                </StyledImageContainer>
            </StyledResultContainer>
            <StyledResultContainer>
                <StyledReultTitle>{t("vaskulitis")}</StyledReultTitle>
                <StyledImageContainer>
                    <StledImg src={vaskulit} alt="" />
                </StyledImageContainer>
            </StyledResultContainer>
            <StyledResultContainer>
                <StyledReultTitle>{t("eczema")}</StyledReultTitle>
                <StyledImageContainer>
                    <StledImg src={ekzema} alt="" />
                </StyledImageContainer>
            </StyledResultContainer>
        </StyledContainer>
    )
}

export default Results;