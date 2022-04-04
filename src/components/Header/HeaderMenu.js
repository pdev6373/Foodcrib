import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaBars } from "react-icons/fa";

export const HeaderMenu = () => {
  const { viewMenu, setViewMenu, setViewSearchInput } = useContext(DataContext);

  const handleToggle = () => {
    setViewSearchInput(false);
    setViewMenu(!viewMenu);
  };

  return (
    <button
      className={
        viewMenu
          ? "header__btns header__btns--invisible-large current"
          : "header__btns header__btns--invisible-large"
      }
      onClick={handleToggle}
    >
      <FaBars />
    </button>
  );
};
