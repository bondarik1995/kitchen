import React from "react";
import { Switch, Route } from "react-router-dom";
import cx from "classnames";

import {
  MAIN_LINK,
  CATALOG_LINK,
  REVIEWS_LINK,
  ABOUT_LINK
} from "constants/Navigation";

import Discount from "components/Discount";
import Catalog from "components/Catalog";
import CatalogSlider from "components/CatalogSlider";
import About from "components/About";
import Feetback from "components/Feetback";
import Reviews from "components/Reviews";
import Thanks from "components/Thanks";
import Contacts from "components/Contacts";

import stylesApp from "styles/_base.scss";

function Main() {
  return (
    <main>
      <div className={cx(stylesApp["container"])}>
        <Switch>
          <Route exact path={MAIN_LINK}>
            <Discount />
          </Route>
          <Route exact path={CATALOG_LINK}>
            <Catalog />
            <CatalogSlider />
          </Route>
          <Route exact path={REVIEWS_LINK}>
            <Reviews />
            <Thanks />
          </Route>
          <Route exact path={ABOUT_LINK}>
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
