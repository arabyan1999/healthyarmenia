import React from "react";
import { useParams } from "react-router-dom";
import { diseases } from "../../data";
import { StyledContentText } from "../Product/styled";
import { StyledBlock, StyledBlockTitle, StyledContainer, StyledImgContainer, StyledMainTitle } from "./styled";

function DiseasePage() {
    const { id } = useParams();
    const disease = diseases.array.find(el => el.id === id);
    return (
        <StyledContainer>
            <StyledMainTitle>
                {disease.name}
            </StyledMainTitle>
            <StyledContentText>
                {disease.about}
            </StyledContentText>
            <StyledImgContainer>
                <img src={disease.image} alt={disease.name} />
            </StyledImgContainer>
            <StyledBlockTitle>
                Ախտանիշները
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.symptoms}
                </StyledContentText>
            </StyledBlock>
            <StyledBlockTitle>
                Ախտորոշումը
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.diagnosis}
                </StyledContentText>
            </StyledBlock>
            <StyledBlockTitle>
                Բուժումը
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.treatment}
                </StyledContentText>
            </StyledBlock>
        </StyledContainer>
    )
}

export default DiseasePage;