import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function Videos() {
    const { t } = useTranslation();
    return (
        <StyledVideosContainer>
            <h1>{t("soon")}</h1>
            <p>{t("in_this_section")}</p>
        </StyledVideosContainer>
    )
}

export default Videos;

const StyledVideosContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 70px;
        margin-bottom: 20px;
    }
    p {
        font-size: 18px;
    }
`