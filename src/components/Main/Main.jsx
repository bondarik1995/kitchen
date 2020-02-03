import React from "react";
import { Switch, Route } from "react-router-dom";

import Discount from "components/Discount";
import Catalog from "components/Catalog";
import CatalogSlider from "components/CatalogSlider";
import About from "components/About";
import Feetback from "components/Feetback";
import Reviews from "components/Reviews";
import Thanks from "components/Thanks";
import Contacts from "components/Contacts";

import "./Main.scss";

function Main() {
  return (
    <main>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Discount />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
            <CatalogSlider />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
            <Thanks />
          </Route>
          <Route exact path="/about">
            <About />
            <Feetback />
            <Contacts />
          </Route>
          <Route>
            <h2>404 - Not found</h2>
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default Main;
