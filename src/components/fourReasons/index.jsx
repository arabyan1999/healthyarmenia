import React from "react";
import { useTranslation } from "react-i18next";
import { StyledLi, StyledTitle } from "./styled";

function FourReason() {
    const { t } = useTranslation();
    return (
        <div>
            <StyledTitle>{t("four_signs")}</StyledTitle>
            <ol>
                <StyledLi>{t("sign_one")}</StyledLi>
                <StyledLi>{t("sign_two")}</StyledLi>
                <StyledLi>{t("sign_three")}</StyledLi>
                <StyledLi>{t("sign_four")}</StyledLi>
            </ol>
        </div>
    )
}

export default FourReason;