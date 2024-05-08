import React from 'react';
import { StyledHeader, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';

function NavigationBar() {
  const { t } = useTranslation();
  return (
    <StyledHeader>
        <StyledTitle>HealthyArmenia</StyledTitle>
        <StyledNavigationBar>
            <StyledLink href="#about">{t("about")}</StyledLink>
            <StyledLink href="#product">{t("product")}</StyledLink>
            <StyledLink href="#discount">{t("discount")}</StyledLink>
            <StyledLink href="#contact">{t("contact")}</StyledLink>
            <StyledLink href="#feedback">{t("feedback")}</StyledLink>
            <LanguageDropdown />
        </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
