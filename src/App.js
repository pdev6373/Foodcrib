import React from "react";
import { DataProvider } from "./components/Context/DataContext";
// import { BrowserRouter } from "react-router";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Cart } from "./components/Cart/Cart";
import { SearchedItems } from "./components/SearchedItems/SearchedItems";
import { AllPages } from "./components/AllPages";

function App() {
  return (
    <div className="container">
      <DataProvider>
        {/* <BrowserRouter> */}
        <Header />
        <Form />
        <Cart />
        <SearchedItems />
        <AllPages />
        {/* </BrowserRouter> */}
      </DataProvider>
    </div>
  );
}

export default App;
