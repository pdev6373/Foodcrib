import React, { useEffect } from "react";
import { DataProvider } from "./components/Context/DataContext";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Cart } from "./components/Cart/Cart";
import { HeaderNavMobile } from "./components/Header/HeaderNavMobile";
import { SearchedItems } from "./components/SearchedItems/SearchedItems";
import { AllPages } from "./components/AllPages";

function App() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="container">
      <DataProvider>
        <Header />
        <Form />
        <Cart />
        <HeaderNavMobile />
        <SearchedItems />
        <AllPages />
      </DataProvider>
    </div>
  );
}

export default App;
