import React from "react";
import { useTranslation } from "react-i18next";
import { StyledBlock, StyledContainer, StyledRef, StyledReferencesBlocks, StyledMainTitle, StyledMenuTitle, StyledImage } from "./styled";
import { ReactComponent as RightArrow } from "../../assets/right-arrow-svgrepo-com.svg";
import { sliceText } from "../../helpers/helper";

function ReferenceBlock({ blocks, link }) {
    const { t } = useTranslation();

    return (
        <StyledContainer>
            <StyledMainTitle>{link === "product" ? t("biologic_actives_that_help") : t("common_diseases_title")}</StyledMainTitle>
            <StyledReferencesBlocks>
                {
                    blocks.array.map((block, index) => {
                        if (index <=2) {
                                return (
                                    <StyledBlock key={block.id} href={!!link ? `/${link}/${block.key}` : null}>
                                        <StyledImage src={block.image} />
                                        <StyledMenuTitle>{t(block.name)}</StyledMenuTitle>
                                        <p>{sliceText(t(block.about) || t(block.function), 10)}</p>
                                    </StyledBlock>
                                )
                        }
                    })
                }
            </StyledReferencesBlocks>
            <StyledRef href={link && `/${link}s`}>{t("more")} <RightArrow /></StyledRef>
        </StyledContainer>
    )
}

export default ReferenceBlock;