import React from "react";
import { StyledLoderContainer } from "./styled";
import { TailSpin } from 'react-loader-spinner';

function Loader() {
    return (
        <StyledLoderContainer>
            <TailSpin />
        </StyledLoderContainer>
    )
}

export default Loader;