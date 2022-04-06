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
    cartItems,
    setTotalAmount,
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
  }, []);

  const handleToggle = () => {
    if (viewCart) {
      setViewAllPages(true);
      setViewCart(false);
      setViewForm(false);
      setViewSearchedItem(false);
    } else {
      setViewAllPages(false);
      setViewCart(true);
      setViewForm(false);
      setViewSearchedItem(false);
    }
  };

  return (
    <button onClick={handleToggle} className="header__btns">
      <div className="header__btns__items-no">{cartItems.length}</div>
      <FaShoppingBag />
    </button>
  );
};
