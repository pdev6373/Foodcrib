import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaUtensilSpoon } from "react-icons/fa";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderSearchMobile = () => {
  const {
    viewSearchInput,
    searchValue,
    setSearchValue,
    setViewSearchedItem,
    setViewAllPages,
  } = useContext(DataContext);

  const { width } = useWindowDimension();

  width <= 700 && viewSearchInput && setViewAllPages(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setViewSearchedItem(true);
  };

  return (
    <form
      className={
        viewSearchInput && width <= 700
          ? "header__search-form__mobile"
          : "invisible"
      }
    >
      <input
        className="header__search-form__mobile__input"
        type="search"
        placeholder="food hunt..."
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="header__search-form__mobile__button"
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        <FaUtensilSpoon className="header__search-form__mobile__button__icon" />
      </button>
    </form>
  );
};
