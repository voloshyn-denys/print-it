import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EditorPage from "./pages/EditorPage";
import ProductsPage from "./pages/ProductsPage";
import MainPage from "./pages/MainPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/editor">
          <EditorPage />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
