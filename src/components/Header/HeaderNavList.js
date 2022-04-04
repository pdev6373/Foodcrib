import React from "react";
import { HeaderNavItems } from "./HeaderNavItems";

export const HeaderNavList = () => {
  const links = ["home", "menu", "about", "popular", "blog", "contact"];
  return (
    <ul className="header__nav__list">
      {links.map((link) => (
        <HeaderNavItems key={link} link={link} />
      ))}
    </ul>
  );
};
