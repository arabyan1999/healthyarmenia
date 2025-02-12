import React from "react";
import { useTranslation } from 'react-i18next';
import { StyledFoot, StyledText, StyledPhoneLink } from "./styled";
import { ReactComponent as FBIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram.svg";

function Footer() {
    const { t } = useTranslation();
    // const year = (new Date()).getFullYear();
    return (
        <StyledFoot>
            <div>
                <StyledText>{t("technical_support")}: <StyledPhoneLink href="tel:+37491177960">+(374)&nbsp;91177960</StyledPhoneLink></StyledText>
                <StyledText>{t("working_hours")}: 10:00-17:00</StyledText>
            </div>
            {/* <StyledText>© 1993-{year} {t("footer_text_second_variant")}</StyledText> */}
            {/* © {t("footer_text")} */}
            <div>
                <a href="https://www.instagram.com/ecofood_medicine/" target="_blank"><InstaIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=61569502964619" target="_blank"><FBIcon /></a>
            </div>
        </StyledFoot>
    )
}

export default Footer;