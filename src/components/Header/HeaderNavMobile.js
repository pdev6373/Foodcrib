import React, { useContext } from "react";
import { HeaderNavList } from "./HeaderNavList";
import { DataContext } from "../Context/DataContext";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderNavMobile = () => {
  const { viewMenu } = useContext(DataContext);
  const { width } = useWindowDimension();

  return (
    <section
      className={
        viewMenu && width <= 1185 ? "header__nav__mobile" : "invisible"
      }
    >
      <nav className="header__nav__mobile__content">
        <HeaderNavList />
      </nav>
    </section>
  );
};
