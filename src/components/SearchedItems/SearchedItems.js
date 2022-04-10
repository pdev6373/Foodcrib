import React, { useEffect, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SectionHeader } from "../SectionHeader";
import { MenuItems } from "../Menu/MenuItems";
import { FaTimes } from "react-icons/fa";

export const SearchedItems = () => {
  const {
    viewSearchedItem,
    setViewSearchedItem,
    setViewAllPages,
    menuItems,
    searchValue,
    setViewForm,
    setViewCart,
    setViewMenu,
    setViewSearchInput,
  } = useContext(DataContext);

  useEffect(() => window.scrollTo(0, 0), [viewSearchedItem]);

  const handleSearch = () => {
    let filteredItems;

    filteredItems = menuItems.filter((menuItem) =>
      menuItem.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredItems.length) {
      return filteredItems.map((menuItem) => (
        <MenuItems
          key={menuItem.name}
          name={menuItem.name}
          img={menuItem.img}
          currentPrice={menuItem.currentPrice}
          previousPrice={menuItem.previousPrice}
        />
      ));
    } else {
      return <h3 className="menu__empty">currently not available</h3>;
    }
  };

  return (
    <section className={viewSearchedItem ? "searched-items" : "invisible"}>
      <FaTimes
        onClick={() => {
          setViewAllPages(true);
          setViewForm(false);
          setViewCart(false);
          setViewMenu(false);
          setViewSearchedItem(false);
          setViewSearchInput(false);
        }}
        className="delete"
      />
      <SectionHeader text="Search Result" />
      {searchValue ? (
        <div className="menu">{handleSearch()}</div>
      ) : (
        <h3 className="none">Enter A Valid Search</h3>
      )}
    </section>
  );
};
