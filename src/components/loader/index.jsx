import React from "react";
import { StyledEmptyContainer, StyledLoderContainer } from "./styled";
import { DNA } from 'react-loader-spinner';

function Loader() {
    return (
        <StyledEmptyContainer>
            <StyledLoderContainer>
                <DNA height={100} width={100} />
            </StyledLoderContainer>
        </StyledEmptyContainer>
    )
}

export default Loader;