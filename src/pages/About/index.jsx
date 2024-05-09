import React from "react";
import { StyledBlock, StyledBlockTitle, StyledImage, StyledText, StyledTitle } from "./styled";
import headquarterLogo from "../../assets/tiens_headquarter.jpg";

function About() {
    return (
        <div>
            <StyledTitle>TIENS</StyledTitle>
            <StyledBlock>
                <StyledImage src={headquarterLogo} alt="headquarter" />
            </StyledBlock>
            <StyledBlock>
                <StyledBlockTitle>
                    ОДИН БИЗНЕС - МНОГО КРЫЛЬЕВ
                </StyledBlockTitle>
                <StyledText>
                   Сегодня «Тяньши» – крупная транснациональная компания, развивающая бизнес в 
                   таких отраслях как биотехнологии, прямые продажи, медицинские услуги, туризм и 
                   гостиничный бизнес, образование, электронная коммерция и др. В 110 странах 
                   действуют филиалы корпорации с производственными мощностями в Испании, Франции, 
                   Германии, Японии, Малайзии, США.
                </StyledText>
            </StyledBlock>
            <StyledBlock>
                ПРЕДСЕДАТЕЛЬ ЛИ
            </StyledBlock>
        </div>
    )
}

export default About;