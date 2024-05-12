import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBlock, StyledContainer, StyledRef, StyledReferencesBlocks, StyledMainTitle, StyledMenuTitle, StyledImage } from "./styled";

function ReferenceBlock({ blocks }) {
    const navigate = useNavigate();
    return (
        <StyledContainer>
            <StyledMainTitle>{blocks.title}</StyledMainTitle>
            <StyledReferencesBlocks isProfessors={blocks.isProfessors}>
                {
                    blocks.array.map((block) => {
                        console.log("block ", block);
                        if (!!blocks.product) {
                            return (
                                <StyledBlock key={block.id} onClick={() => navigate(`/products/${block.id}`)}>
                                    <StyledImage src={block.image}  isProfessors={blocks.isProfessors} />
                                    <StyledMenuTitle>{block.name}</StyledMenuTitle>
                                    <p>{block.shortTitle + "..."}</p>
                                </StyledBlock>
                            )
                        } else {
                            return (
                                <StyledBlock>
                                    <StyledImage src={block.image}  isProfessors={blocks.isProfessors} />
                                    <StyledMenuTitle>{block.name}</StyledMenuTitle>
                                    <p>{blocks.isProfessors ? block.role : block.shortTitle + "..."}</p>
                                </StyledBlock>
                            )
                        }
                    })
                }
            </StyledReferencesBlocks>
            <StyledRef>Ավելին {">"}</StyledRef>
        </StyledContainer>
    )
}

export default ReferenceBlock;