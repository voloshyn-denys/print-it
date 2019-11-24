import React, {useState} from 'react';
import Products from './Products';

const ProductsContainer = () => {
    const [products, setProducts] = useState([
        { id: 1, title: "Van Decals 1" },
        { id: 2, title: "Van Decals 2" }
      ]);

    return <Products products={products} /> 
}

export default ProductsContainer;