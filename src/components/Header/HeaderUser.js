import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaUserAlt } from "react-icons/fa";

export const HeaderUser = () => {
  const { viewForm, setViewForm, setViewCart, setViewAllPages } =
    useContext(DataContext);

  const handleToggle = () => {
    if (viewForm) {
      setViewAllPages(true);
      setViewForm(false);
      setViewCart(false);
    } else {
      setViewAllPages(false);
      setViewForm(true);
      setViewCart(false);
    }
  };

  return (
    <button onClick={handleToggle} className="header__btns">
      <FaUserAlt />
    </button>
  );
};
