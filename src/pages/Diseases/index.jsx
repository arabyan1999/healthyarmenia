import React, { useEffect, useState } from "react";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle, StyledSecondaryTitle, StyledUl, StyledUlContainer } from "./styled";
import { diseases } from "../../data";

function DiseasesPage() {
    const [loading, setLoading] = useState(true);
    useScrollingElement(loading);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    })

    if (loading) {
        return (
            <Loader />
        )
    }
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