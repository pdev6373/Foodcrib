import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { viewCart, itemsNo, cartItems } = useContext(DataContext);

  return (
    <section className={viewCart ? "cart-wrapper" : "invisible"}>
      <div className="cart__body">
        <h3 className="cart__body__header">
          {itemsNo > 0 ? "Your Products" : "No Food Selected"}
        </h3>
        {itemsNo > 0 && (
          <div className="cart__body__items">
            {cartItems.map((cartItem) => (
              <CartItem
                name={cartItem.name}
                img={cartItem.img}
                currentPrice={cartItem.currentPrice}
              />
            ))}
          </div>
        )}
      </div>

      {/* <div className="cart__total">
        <h3 className="cart__total__heading">cart total</h3>
        <div className="cart__total__body">
          <h3 className="cart__total__body__amount">
            total:
            <span>
              {cartItems
                .map((cartItem) => cartItem.currentPrice)
                .reduce((item1, item2) => item1 + item2, 0)}
            </span>
          </h3>
          <button className="cart__total__body__button"></button>
        </div>
      </div> */}
    </section>
  );
};
