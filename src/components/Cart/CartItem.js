import React, { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaTimes } from "react-icons/fa";

export const CartItem = ({ id, name, img, currentPrice }) => {
  const { cartItems, setCartItems, totalAmount, setTotalAmount } =
    useContext(DataContext);
  const [itemsNo, setItemsNo] = useState(1);

  const handleChange = (e) => {
    let newPrice;

    if (e.target.value > itemsNo) {
      newPrice =
        Math.round((totalAmount + currentPrice + Number.EPSILON) * 100) / 100;
    } else if (e.target.value < itemsNo) {
      newPrice =
        Math.round((totalAmount - currentPrice + Number.EPSILON) * 100) / 100;
    }

    setTotalAmount(newPrice);
    sessionStorage.setItem("price", newPrice);
    setItemsNo(e.target.value);
  };

  const handleClick = () => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id != id);
    const newPrice =
      Math.round((totalAmount - currentPrice + Number.EPSILON) * 100) / 100;

    setTotalAmount(newPrice);
    setCartItems(newCartItems);
    sessionStorage.setItem("price", newPrice);
    sessionStorage.setItem("items", JSON.stringify(newCartItems));
  };

  return (
    <div className="cart__body__items__item">
      <FaTimes onClick={handleClick} className="delete" />

      <div className="cart__body__items__item__img-wrapper">
        <img className="cart__body__items__item__img-wrapper__img" src={img} />
      </div>

      <div className="cart__body__items__item__details">
        <h3 className="cart__body__items__item__details__name">{name}</h3>
        <div className="cart__body__items__item__details__quantity">
          <label for="quantity">quantity</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={itemsNo}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="cart__body__items__item__details__price">
          <span className="cart__body__items__item__details__price__text">
            price:
          </span>
          <span className="cart__body__items__item__details__price__value">
            {`$${currentPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};
