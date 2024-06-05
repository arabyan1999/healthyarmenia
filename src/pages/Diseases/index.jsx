import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollingElement } from "../../hooks/use-scrolling-element";
import Loader from "../../components/loader";
import { StyledDiseasesContainer, StyledDiseasesPage, StyledMainTitle, StyledSecondaryTitle, StyledUl, StyledUlContainer } from "./styled";
import { diseases } from "../../data";
import { StyledBlock, StyledImage, StyledMenuTitle } from "../../components/referenceBlock/styled";

function DiseasesPage() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
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
            {/* <StyledMainTitle>{diseases.title}</StyledMainTitle>
            <p>{diseases.prologue}</p> */}
            <StyledDiseasesContainer>
                {/* {diseases.typeOfDiseases.map(el => (
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
                ))} */}
                {
                    diseases.array.map((disease) => 
                            (
                                <StyledBlock key={disease.id} onClick={() => navigate(`/diseases/${disease.id}`)}>
                                    <StyledImage src={disease.image} />
                                    <StyledMenuTitle>{disease.name}</StyledMenuTitle>
                                    <p>{disease.shortTitle + "..."}</p>
                                </StyledBlock>
                            )
                    )
                }
            </StyledDiseasesContainer>
        </StyledDiseasesPage>
    )
}

export default DiseasesPage;