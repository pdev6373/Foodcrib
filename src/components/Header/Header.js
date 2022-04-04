import React from "react";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderCart } from "./HeaderCart";
import { HeaderUser } from "./HeaderUser";
import { HeaderSearchMobile } from "./HeaderSearchMobile";

export const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />
      <div className="header__right">
        <HeaderSearch />
        <HeaderMenu />
        <HeaderCart />
        <HeaderUser />
        <HeaderSearchMobile />
      </div>
    </header>
  );
};
