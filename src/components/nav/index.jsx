import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBurger, StyledHeader, StyledHomeLink, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';

function NavigationBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
        <StyledTitle>
          <StyledHomeLink href="/">
            HealthyArmenia
          </StyledHomeLink>
        </StyledTitle>
        <StyledBurger is_open={isOpen} onClick={() => setIsOpen(prev => !prev)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </StyledBurger>
        <StyledNavigationBar is_open={isOpen}>
          <StyledTitle>
              <StyledHomeLink href="/" className='mobileLogo'>
                HealthyArmenia
              </StyledHomeLink>
          </StyledTitle>
            <StyledLink href="about">{t("about")}</StyledLink>
            <StyledLink href="/diseases">{t("diseases")}</StyledLink>
            <StyledLink href="/products">{t("product")}</StyledLink>
            {/* <StyledLink href="#contact">{t("contact")}</StyledLink> */}
            <StyledLink href={window.location.pathname === "/" ? "#feedback" : "/feedback"}>{t("feedback")}</StyledLink>
            <LanguageDropdown />
        </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
