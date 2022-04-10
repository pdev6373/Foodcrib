import React, { useContext } from "react";
import { DataContext } from "./Context/DataContext";

import { Home } from "./Home/Home";
import { Menu } from "./Menu/Menu";
import { About } from "./About/About";
import { Blog } from "./Blog/Blog";
import { Footer } from "./Footer/Footer";

export const AllPages = () => {
  const { viewAllPages } = useContext(DataContext);

  return (
    <div className={!viewAllPages ? "invisible" : "all-pages"}>
      <Home />
      <Menu />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};
