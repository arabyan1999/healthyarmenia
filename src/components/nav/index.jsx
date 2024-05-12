import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledHomeLink, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';

function NavigationBar() {
  const { t } = useTranslation();
  return (
    <StyledHeader>
        <StyledTitle>
          <StyledHomeLink href="/">
            HealthyArmenia
          </StyledHomeLink>
        </StyledTitle>
        <StyledNavigationBar>
            <StyledLink href="about">{t("about")}</StyledLink>
            <StyledLink href="#diseases">{t("diseases")}</StyledLink>
            <StyledLink href="#product">{t("product")}</StyledLink>
            {/* <StyledLink href="#discount">{t("discount")}</StyledLink> */}
            <StyledLink href="#contact">{t("contact")}</StyledLink>
            <StyledLink href="#feedback">{t("feedback")}</StyledLink>
            <LanguageDropdown />
        </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
