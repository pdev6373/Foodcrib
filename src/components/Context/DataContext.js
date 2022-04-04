import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [itemsNo, setItemsNo] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const [viewAllPages, setViewAllPages] = useState(true);

  const [viewMenu, setViewMenu] = useState(false);
  const [viewCart, setViewCart] = useState(false);
  const [viewSearchInput, setViewSearchInput] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [toggleFormClass, setToggleFormClass] = useState(false);

  return (
    <DataContext.Provider
      value={{
        cartItems,
        setCartItems,
        viewCart,
        setViewCart,
        itemsNo,
        setItemsNo,
        viewAllPages,
        setViewAllPages,
        viewMenu,
        setViewMenu,
        viewSearchInput,
        setViewSearchInput,
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
