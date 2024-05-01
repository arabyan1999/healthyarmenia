import React from 'react';
import { StyledHeader, StyledLink, StyledNavigationBar, StyledTitle } from './styled';
import LanguageDropdown from './LanguageDropdown';

function NavigationBar() {
  return (
    <StyledHeader>
        <StyledTitle>HealthyArmenia</StyledTitle>
        <StyledNavigationBar>
            <StyledLink href="#about">About us</StyledLink>
            <StyledLink href="#product">Product</StyledLink>
            <StyledLink href="#discount">Discount</StyledLink>
            <StyledLink href="#contact">Contact us</StyledLink>
            <StyledLink href="#feedback">Feedback</StyledLink>
            <LanguageDropdown />
        </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
