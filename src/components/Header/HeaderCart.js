import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaShoppingBag } from "react-icons/fa";

export const HeaderCart = () => {
  const { viewCart, setViewCart, setViewForm, setViewAllPages, itemsNo } =
    useContext(DataContext);

  const handleToggle = () => {
    if (viewCart) {
      setViewAllPages(true);
      setViewCart(false);
      setViewForm(false)
    } else {
      setViewAllPages(false);
      setViewCart(true);
      setViewForm(false)
    }
  };

  return (
    <button onClick={handleToggle} className="header__btns">
      {itemsNo > 0 && <div className="header__btns__items-no">{itemsNo}</div>}
      <FaShoppingBag />
    </button>
  );
};
