import React from "react";
import { StyledBlock, StyledContainer, StyledRef, StyledReferencesBlocks, StyledMainTitle, StyledMenuTitle, StyledImage } from "./styled";

function ReferenceBlock({ blocks }) {
    return (
        <StyledContainer>
            <StyledMainTitle>{blocks.title}</StyledMainTitle>
            <StyledReferencesBlocks isProfessors={blocks.isProfessors}>
                {
                    blocks.array.map((block) => (
                        <a href={`products/${block.id}`}>
                        <StyledBlock>
                            <StyledImage src={block.image}  isProfessors={blocks.isProfessors} />
                            <StyledMenuTitle>{block.name}</StyledMenuTitle>
                            <p>{blocks.isProfessors ? block.role : block.shortTitle + "..."}</p>
                        </StyledBlock>
                </a>
                    ))
                }
            </StyledReferencesBlocks>
            <StyledRef>Ավելին {">"}</StyledRef>
        </StyledContainer>
    )
}

export default ReferenceBlock;