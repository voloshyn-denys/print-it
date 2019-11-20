import React from "react"
import {Link, useRouteMatch, useParams } from "react-router-dom";
import withStep from '../../hoc_helpers/withStep';


const Models = ({models}) => {
    const { url } = useRouteMatch(); 
    const { productId } = useParams();
    console.log(productId);
    
    return(
        <>
        <h3>Chose the model:</h3>
        <ul className="unstyle grid">
            {
                models.map(({id, title}) => {
                    return(
                        <li className="grid_card" key={id}>
                            <Link to={`${url}/model-${id}`}>{title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default withStep(Models);