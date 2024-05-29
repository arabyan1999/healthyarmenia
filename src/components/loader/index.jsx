import React from "react";
import { LoaderImg, StyledLoderContainer } from "./styled";
import loaderImg from "../../assets/loader.png"

function Loader() {
    return (
        <StyledLoderContainer>
            <LoaderImg src={loaderImg} />
        </StyledLoderContainer>
    )
}

export default Loader;