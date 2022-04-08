import React, { useState, createContext } from "react";
import img1 from "../../img/hamburger-with-lettuce.jpg";
import img2 from "../../img/spagetthi-with-meatballs.jpg";
import img3 from "../../img/golden-brown-crispy-fried-chicken.jpg";
import img4 from "../../img/american-crispy-fried-chicken.jpg";
import img5 from "../../img/grilled-beef-steak-and-potatoes.jpg";
import img6 from "../../img/pasta-with-meat-and-vegetables.jpg";
import img7 from "../../img/roasted-chicken-leg-and-vegetables.jpg";
import img8 from "../../img/pasta-with-salmon-and-vegetables.jpg";
import img9 from "../../img/grilled-chicken-fillet-with-green-vegetable-salad.jpg";
import img10 from "../../img/spagetthi-with-tomato-sauce.jpg";
import img11 from "../../img/fried-pork-and-vegetables.jpg";
import img12 from "../../img/veal-tenderloin-with-seasonal-vegetables.jpg";
import img13 from "../../img/beans-rice-meat-salad-egg.jpg";
import img14 from "../../img/pasta-fettuccine-with-beef-ragout-sauce.jpg";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(sessionStorage.getItem("items")) || []
  );
  const [totalAmount, setTotalAmount] = useState(
    JSON.parse(sessionStorage.getItem("price")) || 0
  );
  const [viewAllPages, setViewAllPages] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [viewSearchedItem, setViewSearchedItem] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [toggleFormClass, setToggleFormClass] = useState(false);

  const menuItems = [
    {
      name: "Hamburger With Lettuce",
      img: img1,
      currentPrice: 70.85,
      previousPrice: 80.17,
    },
    {
      name: "Spagetthi With Meatballs",
      img: img2,
      currentPrice: 44.31,
      previousPrice: 47.16,
    },
    {
      name: "Golden Brown Crispy Fried Chicken",
      img: img3,
      currentPrice: 61.02,
      previousPrice: 69.69,
    },
    {
      name: "American Crispy Fried Chicken",
      img: img4,
      currentPrice: 77.13,
      previousPrice: 86.83,
    },
    {
      name: "Grilled Beef Steak And Potatoes",
      img: img5,
      currentPrice: 20.44,
      previousPrice: 23.39,
    },
    {
      name: "Pasta With Meat And Vegetables",
      img: img6,
      currentPrice: 50.1,
      previousPrice: 54.33,
    },
    {
      name: "Roasted Chicken Leg And Vegetables",
      img: img7,
      currentPrice: 47.16,
      previousPrice: 44.31,
    },
    {
      name: "Pasta With Salmon And Vegetables",
      img: img8,
      currentPrice: 72.32,
      previousPrice: 74.3,
    },
    {
      name: "Grilled Chicken Fillet With Salad",
      img: img9,
      currentPrice: 108.14,
      previousPrice: 110.14,
    },
    {
      name: "Spagetthi With Tomato Sauce",
      img: img10,
      currentPrice: 39.31,
      previousPrice: 42.88,
    },
    {
      name: "Fried Pork And Vegetables",
      img: img11,
      currentPrice: 84.19,
      previousPrice: 89.32,
    },
    {
      name: "Veal Tenderloin With Seasonal Vegetables",
      img: img12,
      currentPrice: 22.45,
      previousPrice: 27.39,
    },
    {
      name: "Beans, Rice, Meat, Salad and Egg",
      img: img13,
      currentPrice: 52.38,
      previousPrice: 57.76,
    },
    {
      name: "Pasta Fettuccine With Beef Ragout Sauce",
      img: img14,
      currentPrice: 46.16,
      previousPrice: 43.31,
    },
  ];

  return (
    <DataContext.Provider
      value={{
        viewSearchedItem,
        setViewSearchedItem,
        menuItems,
        searchValue,
        setSearchValue,
        totalAmount,
        setTotalAmount,
        cartItems,
        setCartItems,
        viewCart,
        setViewCart,
        viewAllPages,
        setViewAllPages,
        viewMenu,
        setViewMenu,
        viewForm,
        setViewForm,
        toggleFormClass,
        setToggleFormClass,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
