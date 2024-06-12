import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useScrollingElement } from '../../hooks/use-scrolling-element';
import { StyledBurger, StyledHeader, StyledHomeLink, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';
import { ReactComponent as TiensLogo } from "../../assets/logo.svg";

function NavigationBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  // useScrollingElement(isOpen);
  return (
    <StyledHeader>
      <StyledHomeLink href="/">
        <StyledTitle>
          <TiensLogo />
        </StyledTitle>
      </StyledHomeLink>
      <StyledBurger is_open={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </StyledBurger>
      <StyledNavigationBar is_open={isOpen}>
        <StyledTitle>
          <StyledHomeLink href="/" className='mobileLogo'>
            <TiensLogo />
          </StyledHomeLink>
        </StyledTitle>
        <StyledLink href="/about">{t("about")}</StyledLink>
        <StyledLink href="/diseases">{t("diseases")}</StyledLink>
        <StyledLink href="/products">{t("product")}</StyledLink>
        {/* <StyledLink href="#contact">{t("contact")}</StyledLink> */}
        <StyledLink href={window.location.pathname === "/" ? "#feedback" : "/feedback"} onClick={() => setIsOpen(false)}>
          {t("feedback")}
        </StyledLink>
        <LanguageDropdown />
      </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
