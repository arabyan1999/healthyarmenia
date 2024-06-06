import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import { StyledAboutPage, StyledBlock, StyledBlockTitle, StyledCenter, StyledCenterFlex, StyledCertificates, StyledCertificateImg, StyledCircle, StyledFlex, StyledHeadImage, StyledImage, StyledLeftText, StyledMarginBottom, StyledRightAlignText, StyledSecondaryTitle, StyledSignContainer, StyledText, StyledTitle } from "./styled";
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
            <StyledBlock>
                <StyledBlockTitle>
                    {t("one_business")}
                </StyledBlockTitle>
                <StyledText>
                   {t("little_about_tiense")}
                </StyledText>
                <StyledCenterFlex>
                    <StyledCenter>
                        <StyledCircle>
                            <p><CountUp end={195}/></p>
                        </StyledCircle>
                        <StyledText>
                            СТРАН МИРА РАЗВИВАЮТ БИЗНЕС С "ТЯНЬШИ"
                        </StyledText>
                    </StyledCenter>
                    <StyledCenter>
                        <StyledCircle>
                            <p><CountUp end={110} /></p>
                        </StyledCircle>
                        <StyledText>
                            СТРАН И РЕГИОНОВ ИМЕЮТ ФИЛИАЛЫ "ТЯНЬШИ"
                        </StyledText>
                    </StyledCenter>
                    <StyledCenter>
                        <StyledCircle>
                            <p><CountUp end={46} /></p>
                        </StyledCircle>
                        <StyledText>
                            МЛН ПОСТАЯННЫХ ПОТРЕБИТЕЛЕЙ И БИЗНЕС-ПАРТНЕРЕВ
                        </StyledText>
                    </StyledCenter>
                </StyledCenterFlex>
            </StyledBlock>
            <StyledBlock>
                <StyledBlockTitle>
                    ПРЕДСЕДАТЕЛЬ ЛИ
                </StyledBlockTitle>
                <StyledFlex>
                    <StyledLeftText>
                        Основатель компании «Тяньши», китайский предприниматель Ли Цзиньюань родился в 1958 году в деревне 
                        Лилунтунь в провинции Хэбэй в Китае. Очень рано в нем проявился незаурядный коммерческий талант, 
                        твердый характер и стремление улучшить жизнь всех людей мира. Г-н Ли Цзиньюань прошел путь, полный 
                        перипетий, сложностей и неудач – от нескольких небольших заводов в родном поселке до бизнеса, 
                        охватывающего более 190 стран мира.
                    </StyledLeftText>
                </StyledFlex>
                <StyledMarginBottom />
                <StyledFlex>
                    <div>
                        <h2>Message From Chairman Li</h2>
                        <StyledMarginBottom />
                        <StyledSecondaryTitle>Health Dream Tiens Dream My Dream</StyledSecondaryTitle>
                        <div>
                            <StyledLeftText>
                                In 1963, Martin Luther King delivered a famous speech titled 'I Have a Dream', motivating billions of people around the world to strive for their dreams. Since childhood, I also have a dream, which is to use my own efforts to safeguard the happiness and health of more people. So, for decades, with dreams in mind, we have adhered to our original aspirations, led Tiens, and forged ahead, always committed to the big health industry. So far, our business has covered 224 countries and regions. We have provided high-quality health products, health care services, and a happy life.
                            </StyledLeftText>
                            <StyledSignContainer>
                                <StyledRightAlignText>Chairman of Tiens Group: Li Jinyuan</StyledRightAlignText>
                            </StyledSignContainer>
                        </div>
                    </div>
                    <StyledHeadImage src={headLogo} alt="" />
                </StyledFlex>
            </StyledBlock>
            <StyledBlock>
                <StyledBlockTitle>
                    ВЫСОКИЙ СТАНДАРТ - ВЫСОКАЯ НАДЕЖНОСТЬ
                </StyledBlockTitle>
                <StyledFlex>
                    <StyledLeftText>
                        Глобальная система менеджмента качества и безопасности продукции была разработана с учетом законодательных и нормативных актов государств, где представлена продукция «Тяньши».
                        <br/>
                        <br/>
                        Продукция компании «Тяньши» сертифицирована в соответствии с законодательством РФ, прошла проверку в НИИ питания РАМН, исламскую сертификацию HALAL, имеет исламский индонезийский сертификат Syariah, а также более 50 патентов и регистрационных свидетельств на БАД.
                    </StyledLeftText>
                </StyledFlex>
            </StyledBlock>
            <StyledBlock>
                <StyledBlockTitle>
                    МИССИЯ - ЗДОРОВЬЕ
                </StyledBlockTitle>
                <StyledFlex>
                    <StyledLeftText>
                        Ассортимент продукции «Тяньши» разнообразен: биологически активные добавки к пище, косметические средства, средства личной гигиены, средства для ухода за домом и приборы.
                        <br/>
                        <br/>
                        В основе деятельности компании – глубокая и многогранная восточная культура поддержания здоровья и в сочетании с новейшими биотехнологиями. Наша эффективная и безопасная продукция для здоровья: биологически активные добавки, косметика, предметы домашнего обихода и моющие средства – пользуется признанием и любовью потребителей. Именно благодаря ей они получают возможность жить красивой и разнообразной жизнью.
                        <br/>
                        <br/>
                        Сырье для производства корпорация «Тяньши» выбирает по всему миру. Сухое молоко поступает из Новой Зеландии, которая славится превосходными естественными пастбищами, какао-порошок закупается в Индонезии, овсяную и яблочную клетчатку поставляет Германия, фруктозу – Финляндия, лактозу – США. Качественные ингредиенты - лучшая гарантия безопасности продукции. В 2021 году кальциевая серия «Тяньши» получила золотую медаль Международной выставки Panama World Expo.
                    </StyledLeftText>
                </StyledFlex>
            </StyledBlock>
            <StyledBlockTitle>
                Certificates
            </StyledBlockTitle>
            <StyledMarginBottom />
            <StyledFlex>
                <StyledCertificates>
                    {/* <StyledCertificateImg src={certificate1} /> */}
                    {
                        certificates.map((el) => (
                          <StyledCertificateImg src={require(`../../assets/${el}.jpg`)} />  
                        ))
                    }
                </StyledCertificates>
            </StyledFlex>
        </StyledAboutPage>
    )
}

export default About;