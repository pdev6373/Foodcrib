import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaUtensilSpoon, FaSearch } from "react-icons/fa";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderSearch = () => {
  const { viewSearchInput, setViewSearchInput, setViewMenu } =
    useContext(DataContext);
  const { width } = useWindowDimension();

  const handleToggle = (e) => {
    e.preventDefault();
    setViewMenu(false);
    setViewSearchInput(!viewSearchInput);
  };

  let search =
    width > 700 ? (
      <form className="header__search-form">
        <input
          className="header__search-form__input"
          type="search"
          placeholder="food hunt"
          // value="food"
        />
        <button
          onClick={(e) => e.preventDefault()}
          className="header__search-form__button"
          type="submit"
        >
          <FaUtensilSpoon className="header__search-form__button__icon" />
        </button>
      </form>
    ) : (
      <button
        className={
          viewSearchInput
            ? "header__search-form__button current"
            : "header__search-form__button"
        }
        type="submit"
        onClick={(e) => handleToggle(e)}
      >
        <FaSearch className="header__search-form__button__icon" />
      </button>
    );

  return search;
};
