import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { CartItem } from "./CartItem";
import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";

export const Cart = () => {
  const { viewCart, cartItems } = useContext(DataContext);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => window.scrollTo(0, 0), [viewCart]);

  useEffect(() => {
    setTotalAmount(
      Math.round(
        (cartItems
          .map((cartItem) => cartItem.currentPrice * cartItem.itemsNo)
          .reduce((priceOne, priceTwo) => priceOne + priceTwo, 0) +
          Number.EPSILON) *
          100
      ) / 100
    );
  }, [cartItems]);

  const returnValue =
    cartItems.length === 0 ? (
      <section
        className={viewCart ? "cart-wrapper cart-wrapper--none" : "invisible"}
      >
        <h3 className="cart-wrapper__none">Fill up the cart with some foods</h3>
      </section>
    ) : (
      <section className={viewCart ? "cart-wrapper" : "invisible"}>
        <div className="cart__body">
          <SectionHeader text="Your Products" />
          <div className="cart__body__items">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                name={cartItem.name}
                img={cartItem.img}
                currentPrice={cartItem.currentPrice}
                id={cartItem.id}
              />
            ))}
          </div>
        </div>

        <div className="cart__total">
          <SectionHeader text="Cart Total" />
          <div className="cart__total__body">
            <h3 className="cart__total__body__amount">
              total:
              <span>{` $${totalAmount}`}</span>
            </h3>
            <Button text="proceed to checkout" />
          </div>
        </div>
      </section>
    );

  return returnValue;
};
