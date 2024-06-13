import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledBlock, StyledContainer, StyledRef, StyledReferencesBlocks, StyledMainTitle, StyledMenuTitle, StyledImage } from "./styled";
import { ReactComponent as RightArrow } from "../../assets/right-arrow-svgrepo-com.svg";

function ReferenceBlock({ blocks, link }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <StyledContainer>
            <StyledMainTitle>{link === "products" ? t("biologic_actives_that_help") : t("common_diseases_title")}</StyledMainTitle>
            <StyledReferencesBlocks isProfessors={blocks.isProfessors}>
                {
                    blocks.array.map((block, index) => {
                        if (index <=2) {
                                return (
                                    <StyledBlock key={block.id} onClick={!!link ? () => navigate(`/${link}/${block.id}`) : () => {}}>
                                        <StyledImage src={block.image} isProfessors={blocks.isProfessors} />
                                        <StyledMenuTitle>{block.name}</StyledMenuTitle>
                                        <p>{blocks.isProfessors ? block.role : block.shortTitle + "..."}</p>
                                    </StyledBlock>
                                )
                        }
                    })
                }
            </StyledReferencesBlocks>
            <StyledRef href={link && `/${link}`}>Ավելին <RightArrow /></StyledRef>
        </StyledContainer>
    )
}

export default ReferenceBlock;