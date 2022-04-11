import React, { useEffect, useContext } from "react";
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
    setTotalAmount,
    setViewSearchInput,
  } = useContext(DataContext);

  useEffect(() => {
    setTotalAmount(
      Math.round(
        (cartItems
          .map((cartItem) => cartItem.currentPrice)
          .reduce((priceOne, priceTwo) => priceOne + priceTwo, 0) +
          Number.EPSILON) *
          100
      ) / 100
    );
  }, [setTotalAmount, cartItems]);

  const handleToggle = () => {
    setViewSearchInput(false);
    setViewSearchedItem(false);
    setViewAllPages(false);
    setViewMenu(false);
    setViewCart(false);
    setViewForm(false);

    viewCart ? setViewAllPages(true) : setViewCart(true);
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
