import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const MenuItems = ({ name, img, currentPrice, previousPrice }) => {
  const { cartItems, totalAmount, setTotalAmount, setCartItems } =
    useContext(DataContext);

  const handleClick = () => {
    const id =
      cartItems.length == 0 ? 0 : cartItems[cartItems.length - 1].id + 1;
    const newItem = { name, img, currentPrice, previousPrice, id };
    const newCartItems =
      cartItems.length == 0 ? [newItem] : [...cartItems, newItem];
    const newPrice =
      Math.round((totalAmount + currentPrice + Number.EPSILON) * 100) / 100;

    setTotalAmount(newPrice);
    setCartItems(newCartItems);
    sessionStorage.setItem("price", newPrice);
    sessionStorage.setItem("items", JSON.stringify(newCartItems));
  };

  return (
    <div className="menu__items">
      <img className="menu__items__img" src={img} />
      <p className="menu__items__name">{name}</p>
      <div className="menu__items__price">
        <p className="menu__items__price__current">{`$${currentPrice}`}</p>
        <p className="menu__items__price__previous">{`$${previousPrice}`}</p>
      </div>
      <button onClick={handleClick} className="menu__items__button">
        add to cart
      </button>
    </div>
  );
};
