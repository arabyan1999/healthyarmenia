import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLanguageFropdown } from './styled';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('am');

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <StyledLanguageFropdown>
      <select id="language-select" value={selectedLanguage} onChange={(e) => handleLanguageChange(e)}>
        <option value="am">AM</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </StyledLanguageFropdown>
  );
}

export default LanguageDropdown;
