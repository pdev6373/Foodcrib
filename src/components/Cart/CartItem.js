import React from "react";
import { FaTimes } from "react-icons/fa";

export const CartItem = ({ name, img, currentPrice }) => {
  return (
    <div className="cart__items__item">
      <FaTimes className="cart__items__item__delete" />

      <div className="cart__items__item__img-wrapper">
        <img className="cart__items__item__img-wrapper__img" src={img} />
      </div>

      <div className="cart__items__item__details">
        <h3 className="cart__items__item__details__name">{name}</h3>
        <div className="cart__items__item__details__quantity">
          <label for="quantity">quantity</label>
          <input id="quantity" type="number" value="1" />
        </div>
        <div className="cart__items__item__details__price">
          <span className="cart__items__item__details__price__text">
            price:
          </span>
          <span className="cart__items__item__details__price__value">
            {`$${currentPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};
