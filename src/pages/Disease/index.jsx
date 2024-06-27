import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { diseases } from "../../data";
import { StyledContentText } from "../Product/styled";
import { StyledBlock, StyledBlockTitle, StyledCenterText, StyledContainer, StyledImgContainer, StyledMainTitle, StyledRefButton } from "./styled";
// import { ContactModal } from "../../components/nav/contactModal";

function DiseasePage() {
    const { t } = useTranslation();
    const { id } = useParams();
    // const [modal, setModal] = useState(false);
    const disease = diseases.array.find(el => el.id == 1);
    return (
        <StyledContainer>
            <StyledMainTitle>
                {disease.name}
            </StyledMainTitle>
            <StyledBlockTitle>
                {t("description")}
            </StyledBlockTitle>
            <StyledContentText>
                {disease.about}
            </StyledContentText>
            <StyledImgContainer>
                <img src={disease.image} alt={disease.name} />
            </StyledImgContainer>
            <StyledBlockTitle>
                {t("symptoms")}
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.symptoms}
                </StyledContentText>
            </StyledBlock>
            {/* <StyledBlockTitle>
                Ախտորոշումը
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.diagnosis}
                </StyledContentText>
            </StyledBlock> */}
            {/* <StyledBlockTitle>
                Բուժումը
            </StyledBlockTitle>
            <StyledBlock>
                <StyledContentText>
                    {disease.treatment}
                </StyledContentText>
            </StyledBlock> */}
            {/* <StyledCenterText>Հիվանդության կանխարգելման և/կամ բուժման մասին տեղեկություն ստանալու համար <StyledRefButton onClick={() => setModal(true)}>գրանցվեք հղումով</StyledRefButton></StyledCenterText>
            {modal && <ContactModal setModal={setModal} />} */}
        </StyledContainer>
    )
}

export default DiseasePage;