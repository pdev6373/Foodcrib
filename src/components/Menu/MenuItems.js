import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const MenuItems = ({ name, img, currentPrice, previousPrice }) => {
  const { itemsNo, setItemsNo, cartItems, setCartItems } =
    useContext(DataContext);

  const handleClick = () => {
    const newItem = { name, img, currentPrice, previousPrice };
    setItemsNo(itemsNo + 1);
    setCartItems(!cartItems ? [newItem] : [...cartItems, newItem]);
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
