import React from "react"
import { Link, useRouteMatch } from "react-router-dom";

import withStep from '../../hoc_helpers/withStep';

const Products = ({products}) => {
    const { url } = useRouteMatch(); 

    return(
        <>
        <h3>Chose the product, please:</h3>
        <ul className="unstyle grid">
            {
                products.map(({id, title}) => {
                    return(
                        <li className="grid_card" key={id}>
                            <Link to={`${url}/product-${id}`}>{title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default withStep(Products);