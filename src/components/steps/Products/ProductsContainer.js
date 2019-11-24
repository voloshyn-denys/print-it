import React from "react";
import Products from "./Products";

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ProductsContainer = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return 'Loading...';

  return <Products products={data.products} />
};

const GET_PRODUCTS = gql`
  {
    products {
      id
      title
    }
  }
`;

export default ProductsContainer;
