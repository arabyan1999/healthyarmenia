import React from "react";
import { useTranslation } from "react-i18next";
import { StyledBlock, StyledBlockTitle, StyledCenter, StyledCenterFlex, StyledCircle, StyledFlex, StyledHeadImage, StyledImage, StyledLeftText, StyledText, StyledTitle } from "./styled";
import headquarterLogo from "../../assets/tiens_headquarter.jpg";
import headLogo from "../../assets/head.png";

function About() {
    const { t } = useTranslation();
    return (
        <div>
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
                            <p>195</p>
                        </StyledCircle>
                        <StyledText>
                            СТРАН МИРА РАЗВИВАЮТ БИЗНЕС С "ТЯНЬШИ"
                        </StyledText>
                    </StyledCenter>
                    <StyledCenter>
                        <StyledCircle>
                            <p>110</p>
                        </StyledCircle>
                        <StyledText>
                            СТРАН И РЕГИОНОВ ИМЕЮТ ФИЛИАЛЫ "ТЯНЬШИ"
                        </StyledText>
                    </StyledCenter>
                    <StyledCenter>
                        <StyledCircle>
                            <p>46</p>
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
        </div>
    )
}

export default About;