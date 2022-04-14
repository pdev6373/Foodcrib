import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaBars } from "react-icons/fa";

export const HeaderMenu = () => {
  const {
    viewMenu,
    setViewMenu,
    setViewAllPages,
    setViewCart,
    setViewSearchInput,
    setViewForm,
    setViewSearchedItem,
  } = useContext(DataContext);

  const handleToggle = () => {
    setViewAllPages(true);
    setViewCart(false);
    setViewForm(false);
    setViewSearchedItem(false);
    setViewSearchInput(false);

    viewMenu ? setViewMenu(false) : setViewMenu(true);
  };

  return (
    <button
      className={
        viewMenu
          ? "header__btns header__btns--invisible-large header__btns header__btns--current"
          : "header__btns header__btns--invisible-large"
      }
      onClick={handleToggle}
    >
      <FaBars />
    </button>
  );
};
