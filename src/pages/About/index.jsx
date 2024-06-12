import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import { StyledAboutPage, StyledBlock, StyledBlockTitle, StyledCenter, StyledCenterFlex, StyledCertificates, StyledCertificateImg, StyledCircle, StyledFlex, StyledHeadImage, StyledImage, StyledLeftText, StyledMarginBottom, StyledRightAlignText, StyledSecondaryTitle, StyledSignContainer, StyledText, StyledTitle, StyledContent, StyledNumbersText } from "./styled";
import headquarterLogo from "../../assets/tiens_headquarter.jpg";
import headLogo from "../../assets/head.png";

const certificates = ["certificate1", "certificate2", "certificate3", "certificate4", "certificate5", "certificate6", "certificate7"];

function About() {
    const { t } = useTranslation();
    return (
        <StyledAboutPage>
            <StyledTitle>TIENS</StyledTitle>
            <StyledBlock>
                <StyledImage src={headquarterLogo} alt="headquarter" />
            </StyledBlock>
            <StyledContent>
                <StyledBlock>
                    {/* <StyledBlockTitle>
                        {t("one_business")}
                    </StyledBlockTitle> */}
                    <StyledText>
                    {t("little_about_tiens")}
                    </StyledText>
                    <StyledCenterFlex>
                        <StyledCenter>
                            <StyledCircle>
                                <p><CountUp end={195} duration={6} /></p>
                            </StyledCircle>
                            <StyledNumbersText>
                                {t("countries_develop_tiens")}
                            </StyledNumbersText>
                        </StyledCenter>
                        <StyledCenter>
                            <StyledCircle>
                                <p><CountUp end={110} duration={6} /></p>
                            </StyledCircle>
                            <StyledNumbersText>
                                {t("countries_regions_have_branches_tiens")}
                            </StyledNumbersText>
                        </StyledCenter>
                        <StyledCenter>
                            <StyledCircle>
                                <p><CountUp end={46} duration={6} /></p>
                            </StyledCircle>
                            <StyledNumbersText>
                                {t("mln_regular_consumer")}
                            </StyledNumbersText>
                        </StyledCenter>
                    </StyledCenterFlex>
                </StyledBlock>
                <StyledBlock>
                    <StyledBlockTitle>
                        {t("chairman_li")}
                    </StyledBlockTitle>
                    <StyledFlex>
                        <StyledLeftText>
                            {t("about_li")}
                        </StyledLeftText>
                    </StyledFlex>
                    <StyledMarginBottom />
                    <StyledFlex>
                        <div>
                            <h2>{t("message_from_chairman_li")}</h2>
                            <StyledMarginBottom />
                            <StyledSecondaryTitle>{t("health_dream")}</StyledSecondaryTitle>
                            <div>
                                <StyledLeftText>
                                    {t("chairman_message_content")}
                                </StyledLeftText>
                                <StyledSignContainer>
                                    <StyledRightAlignText>{t("chairman_of_tiens_group")}</StyledRightAlignText>
                                </StyledSignContainer>
                            </div>
                        </div>
                        <StyledHeadImage src={headLogo} alt="" />
                    </StyledFlex>
                </StyledBlock>
                <StyledBlock>
                    <StyledBlockTitle>
                        {t("hight_standard")}
                    </StyledBlockTitle>
                    <StyledFlex>
                        <StyledLeftText>
                            {t("global_system")}
                            <br/>
                            <br/>
                            {t("product_sertfied")}
                        </StyledLeftText>
                    </StyledFlex>
                </StyledBlock>
                <StyledBlockTitle>
                    {t("certificates")}
                </StyledBlockTitle>
                <StyledFlex>
                    <StyledText>
                        {t("best_eastern_technologies")}
                    </StyledText>
                </StyledFlex>
                <StyledFlex>
                    <StyledCertificates>
                        {/* <StyledCertificateImg src={certificate1} /> */}
                        {
                            certificates.map((el) => (
                                <StyledCertificateImg src={require(`../../assets/${el}.jpg`)} onClick={() => window.open(require(`../../assets/${el}.jpg`))} />  
                            ))
                        }
                    </StyledCertificates>
                </StyledFlex>
                <StyledBlock>
                    <StyledBlockTitle>
                        {t("mission_health")}
                    </StyledBlockTitle>
                    <StyledFlex>
                        <StyledLeftText>
                            {t("goods_range")}
                            <br/>
                            <br/>
                            {t("company_activities")}
                            <br/>
                            <br/>
                            {t("selects_row_materials_for_production")}
                        </StyledLeftText>
                    </StyledFlex>
                </StyledBlock>
                
                <StyledMarginBottom />
            </StyledContent>
        </StyledAboutPage>
    )
}

export default About;