import React from "react";
import { useTranslation } from 'react-i18next';
import { StyledFoot } from "./styled";

function Footer() {
    const { t } = useTranslation();
    return (
        <StyledFoot>
            © {t("footer_text")}
        </StyledFoot>
    )
}

export default Footer;