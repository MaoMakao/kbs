import React from "react";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "./LanguageSelector.styles";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Select value={i18n.language} onChange={handleChangeLanguage}>
      <MenuItem value="en">en</MenuItem>
      <MenuItem value="ua">ua</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
