import React from "react";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle, StyledSecondaryTitle, StyledUl, StyledUlContainer } from "./styled";
import { diseases } from "../../data";

function DiseasesPage() {
    return (
        <StyledDiseasesPage>
            <StyledMainTitle>{diseases.title}</StyledMainTitle>
            <p>{diseases.prologue}</p>
            <StyledDiseasesContainer>
                {diseases.typeOfDiseases.map(el => (
                        <StyledUlContainer key={el.id}>
                            <StyledSecondaryTitle>{el.category}</StyledSecondaryTitle>
                            <StyledUl>
                                {
                                    el.diseases.map(diseas => (
                                        <li>{diseas.title}</li>
                                    ))
                                }
                            </StyledUl>
                        </StyledUlContainer>
                ))}
            </StyledDiseasesContainer>
        </StyledDiseasesPage>
    )
}

export default DiseasesPage;