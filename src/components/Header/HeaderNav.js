import React, { useContext } from "react";
import { HeaderNavList } from "./HeaderNavList";
import { DataContext } from "../Context/DataContext";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderNav = () => {
  const { viewMenu } = useContext(DataContext);
  const { width } = useWindowDimension();

  return (
    <nav
      className={
        viewMenu || width > 1060 ? "header__nav" : "invisible"
      }
    >
      <HeaderNavList />
    </nav>
  );
};
