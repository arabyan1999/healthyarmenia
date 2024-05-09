import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DiseasesMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        {t("disease")}
      </button>
      {isOpen && (
        <ul className="menu-list">
          {items.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiseasesMenu;
