import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaShoppingBag } from "react-icons/fa";

export const HeaderCart = () => {
  const {
    viewCart,
    setViewCart,
    setViewForm,
    setViewAllPages,
    setViewSearchedItem,
    setViewMenu,
    cartItems,
    setViewSearchInput,
  } = useContext(DataContext);

  const handleToggle = () => {
    setViewSearchInput(false);
    setViewSearchedItem(false);
    setViewAllPages(false);
    setViewMenu(false);
    setViewForm(false);

    if (viewCart) {
      setViewCart(false);
      setViewAllPages(true);
    } else {
      setViewCart(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={
        viewCart ? "header__btns header__btns--current" : "header__btns"
      }
    >
      <div className="header__btns__items-no">{cartItems.length}</div>
      <FaShoppingBag />
    </button>
  );
};
