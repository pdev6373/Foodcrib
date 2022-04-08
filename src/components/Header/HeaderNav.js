import React from "react";
import { HeaderNavList } from "./HeaderNavList";
import useWindowDimension from "../../hooks/useWindowDimensions";

export const HeaderNav = () => {
  const { width } = useWindowDimension();

  return (
    <nav className={width > 1185 ? "header__nav" : "invisible"}>
      <HeaderNavList />
    </nav>
  );
};
