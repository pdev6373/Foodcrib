import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaUserAlt } from "react-icons/fa";

export const HeaderUser = () => {
  const {
    viewForm,
    setViewForm,
    setViewCart,
    setViewAllPages,
    setViewSearchedItem,
    setViewMenu,
  } = useContext(DataContext);

  const handleToggle = () => {
    setViewAllPages(false);
    setViewMenu(false);
    setViewCart(false);
    setViewForm(false);
    setViewSearchedItem(false);

    if (viewForm) setViewAllPages(true);
    else setViewForm(true);
  };

  return (
    <button
      onClick={handleToggle}
      className={
        viewForm ? "header__btns header__btns--current" : "header__btns"
      }
    >
      <FaUserAlt />
    </button>
  );
};
