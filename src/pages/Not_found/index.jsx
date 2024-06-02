import React from "react";
import { useTranslation } from "react-i18next";
import { StyledContainer } from "./styled";

function NotFound() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <h5 className="font">OOPS! {t("page_not_found")}</h5>
            <h1 className="font">404</h1>
            <h3 className="font">{t("requested_page_not_found")}</h3>
        </StyledContainer>
    )
}

export default NotFound;