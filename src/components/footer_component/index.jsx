import React from "react";
import { useTranslation } from 'react-i18next';
import { StyledFoot, StyledText } from "./styled";
import { ReactComponent as FBIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram.svg";

function Footer() {
    const { t } = useTranslation();
    const year = (new Date()).getFullYear();
    return (
        <StyledFoot>
            <StyledText>© 1992-{year} {t("footer_text_second_variant")}</StyledText>
            {/* © {t("footer_text")} */}
            <div>
                <a href="https://www.instagram.com/tiens_official_armenia/" target="_blank"><InstaIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=61559594325554" target="_blank"><FBIcon /></a>
            </div>
        </StyledFoot>
    )
}

export default Footer;