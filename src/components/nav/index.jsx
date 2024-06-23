import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useScrollingElement } from '../../hooks/use-scrolling-element';
import { StyledBurger, StyledButton, StyledHeader, StyledHomeLink, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';
import { ReactComponent as TiensLogo } from "../../assets/logo.svg";
import { ContactModal } from './contactModal';

function NavigationBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  console.log(t("about"));
  // useScrollingElement(isOpen);
  return (
    <StyledHeader>
      <StyledHomeLink href="/">
        <StyledTitle>
          <TiensLogo />
        </StyledTitle>
      </StyledHomeLink>
      <StyledBurger is_open={isOpen ? 1 : undefined} onClick={() => setIsOpen(prev => !prev)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </StyledBurger>
      <StyledNavigationBar is_open={isOpen ? 1 : undefined}>
        {/* <StyledTitle>
          <StyledHomeLink href="/" className='mobileLogo'>
            <TiensLogo />
          </StyledHomeLink>
        </StyledTitle> */}
        <StyledLink href="/about">{t("about")}</StyledLink>
        <StyledLink href="/diseases">{t("diseases")}</StyledLink>
        <StyledLink href="/products">{t("product")}</StyledLink>
        <StyledLink href={window.location.pathname === "/" ? "#feedback" : "/feedback"} onClick={() => setIsOpen(false)}>
          {t("feedback")}
        </StyledLink>
        <StyledButton onClick={() => setModal(true)}>{t("contact")}</StyledButton>
        <LanguageDropdown />
      </StyledNavigationBar>
      {modal && <ContactModal setModal={setModal} />}
    </StyledHeader>
  );
}

export default NavigationBar;
