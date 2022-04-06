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
  } = useContext(DataContext);

  const handleToggle = () => {
    if (viewForm) {
      setViewAllPages(true);
      setViewForm(false);
      setViewCart(false);
      setViewSearchedItem(false);
    } else {
      setViewAllPages(false);
      setViewForm(true);
      setViewCart(false);
      setViewSearchedItem(false);
    }
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
