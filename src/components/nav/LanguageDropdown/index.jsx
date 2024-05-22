import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { StyledLanguageFropdown } from './styled';

// function LanguageDropdown() {
//   const [selectedLanguage, setSelectedLanguage] = useState('am');

//   const { t, i18n } = useTranslation();

//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <StyledLanguageFropdown>
//       <select id="language-select" value={selectedLanguage} onChange={(e) => handleLanguageChange(e)}>
//         <option value="am">AM</option>
//         <option value="ru">RU</option>
//         <option value="en">EN</option>
//       </select>
//     </StyledLanguageFropdown>
//   );
// }

// export default LanguageDropdown;

import './dropdown.css'; // Import your CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ՀԱՅ");
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (item) => {
    setSelectedLang(item.title);
    i18n.changeLanguage(item.value);
  }

  const items = [{title: "ՀԱՅ", value: "am"}, {title: "ENG", value: "en"}, {title: "РУС", value: "ru"}]

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className="dropdown-toggle">
        {selectedLang}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.filter(el => el.title !== selectedLang).map((item, index) => (
            <li key={index} onClick={() => {changeLanguage(item)}}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
