import React from "react";
import { Switch, Route } from "react-router-dom";

import Discount from "../Discount";
import Catalog from "../Catalog";
import CatalogSlider from "../CatalogSlider";
import About from "../About";
import Feetback from "../Feetback";
import Reviews from "../Reviews";
import Thanks from "../Thanks";
import Contacts from "../Contacts";

import "./Main.css";

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
          {/* <Route
              path="/projects/:id"
              component={({ match }) => {
                const project =
                  projects.find(item => item.id == match.params.id) || {};
                return <Project project={project} />;
              }}
            /> */}
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
