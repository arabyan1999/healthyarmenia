import React, { useState } from 'react';
import { StyledLanguageFropdown } from './styled';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default language is English

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // You can add any additional logic here to handle language change, like updating language settings or triggering language-specific actions
  };

  return (
    <StyledLanguageFropdown>
      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="AM">AM</option>
        <option value="RU">RU</option>
        <option value="EN">EN</option>
      </select>
    </StyledLanguageFropdown>
  );
}

export default LanguageDropdown;
