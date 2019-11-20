import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Products from "../components/steps/Products/ProductsContainer";
import Models from "../components/steps/Models/ModelsContainer";
import Autocomplete from "../components/steps/Autocomplete/AutocompleteContainer";
import Final from "../components/steps/Final/FinalContainer";

const ProductsPage = () => {
  const { path } = useRouteMatch();

  return (
    <div className="container">
      <Switch>
        <Route path={path} 
          exact>
          <Products />
        </Route>

        <Route path={`${path}/product-:productId`} 
          exact>
          <Models />
        </Route>

        <Route path={`${path}/product-:productId/model-:modelId`} 
          exact>
          <Autocomplete />
        </Route>

        <Route path={`${path}/product-:productId/model-:modelId/final-step`}
          exact >
          <Final />
        </Route>
      </Switch>
    </div>
  );
};

export default ProductsPage;
