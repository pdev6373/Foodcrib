import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SectionHeader } from "../SectionHeader";
import { MenuItems } from "./MenuItems";

export const Menu = () => {
  const { menuItems } = useContext(DataContext);

  return (
    <section className="menu" id="menu">
      <SectionHeader text="Available Foods" />
      <div className="menu__list">
        {menuItems.map((menuItem) => (
          <MenuItems
            name={menuItem.name}
            img={menuItem.img}
            currentPrice={menuItem.currentPrice}
            previousPrice={menuItem.previousPrice}
          />
        ))}
      </div>
    </section>
  );
};
