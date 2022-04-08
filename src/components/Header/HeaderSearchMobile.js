import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { FaUtensilSpoon } from "react-icons/fa";

export const HeaderSearchMobile = () => {
  const { viewSearchInput } = useContext(DataContext);

  return (
    <form
      className={viewSearchInput ? "header__search-form__mobile" : "invisible"}
    >
      <input
        className="header__search-form__mobile__input"
        type="search"
        placeholder="food hunt"
        // value="food"
      />
      <button className="header__search-form__mobile__button" type="submit">
        <FaUtensilSpoon className="header__search-form__mobile__button__icon" />
      </button>
    </form>
  );
};
