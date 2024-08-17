import React from "react";
import { useTranslation } from "react-i18next";
import { StyledBlock, StyledContainer, StyledFirstTitle, StyledFlex, StyledImg, StyledSecondaryTitle, StyledText } from "./styled";
import FourReason from "../fourReasons";
import { StyledLi } from "../fourReasons/styled";
import detoxImage from "../../assets/detox.jpg";

function Foreword() {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <StyledBlock>
                <StyledFirstTitle>{t("why_our_services")}</StyledFirstTitle>
                {/* <StyledCentrelizedText>
                    Stex klini mi hat poqr text
                </StyledCentrelizedText> */}
                <ol>
                    <StyledLi>
                        {t("choice_reason_one")}
                    </StyledLi>
                    <StyledLi>
                        {t("choice_reason_two")}
                    </StyledLi>
                    <StyledLi>
                        {t("choice_reason_three")}
                    </StyledLi>
                    <StyledLi>
                        {t("choice_reason_four")}
                    </StyledLi>
                </ol>
            </StyledBlock>
            {/* <StyledTitle>{t("main_idea")} {t("hard_work")}</StyledTitle>
            <StyledText mb>{t("deteriorating_environmental_conditions")}</StyledText>
            <StyledText mb>{t("site_provides_valuable_information")}</StyledText> */}

            <StyledSecondaryTitle>
                {t("detox")}
            </StyledSecondaryTitle>
            <StyledFlex>
                <StyledText>
                    {t("detox_is")}
                </StyledText>
                <StyledImg src={detoxImage} alt="" />
            </StyledFlex>
            <FourReason />
        </StyledContainer>
    )
}

export default Foreword;