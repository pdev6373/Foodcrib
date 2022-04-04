import React from "react";

export const HeaderNavItems = ({ link }) => {
  return (
    <li className="header__nav__list__items">
      <a className="header__nav__list__items__link" href={link}>
        {link}
      </a>
    </li>
  );
};
