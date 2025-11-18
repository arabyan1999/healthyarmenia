import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBurger, StyledButton, StyledHeader, StyledHomeLink, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';
import { ReactComponent as TiensLogo } from "../../assets/logo.svg";
import { ContactModal } from './contactModal';

function NavigationBar() {
  
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [path, setPaht] = useState("");
  
  useEffect(() => {
    setPaht(window.location.pathname);
  }, [window.location.pathname]);


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
        <StyledLink href="/products" className={path.includes("/product") ? "active" : ""}>{t("product")}</StyledLink>
        <StyledLink href="/diseases" className={path.includes("/disease") ? "active" : ""}>{t("diseases")}</StyledLink>
        <StyledLink href="/feedback" className={path === "/feedback" ? "active" : ""}>{t("feedback")}</StyledLink>
        <StyledLink href="/results" className={path.includes("/results") ? "active" : ""}>{t("results")}</StyledLink>
        <StyledLink href="/about" className={path === "/about" ? "active" : ""}>{t("about")}</StyledLink>
        <StyledButton
          onClick={() => {
            setModal(true);
            setIsOpen(false);
          }}
        >
          {t("contact")}
        </StyledButton>
        <LanguageDropdown />
      </StyledNavigationBar>
      {modal && <ContactModal setModal={setModal} />}
    </StyledHeader>
  );
}

export default NavigationBar;
