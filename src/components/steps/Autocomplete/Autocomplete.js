import React from "react"
import { Link, useRouteMatch, useParams } from "react-router-dom";
import withStep from '../../hoc_helpers/withStep';


const Autocomplete = ({items}) => {
    const { url } = useRouteMatch(); 
    const { productId, modelId } = useParams();
    console.log(productId, modelId);

    return(
        <>
        <h3>Chose available items:</h3>
        <div className="autocomplete">
            <div className="input-effect">
                <input type="text"  className="effect-17" required id="autocomplete_search" />
                <label htmlFor="autocomplete_search">Type search term</label>
                <span className="focus-border"></span>
            </div>
            
            <ul className="unstyle autocomplete_list">
                {  items.map(({id, title})=>{
                    return(
                        <li className="autocomplete_item" key={id}>
                            <Link to={`${url}/final-step`}>{title}</Link>
                        </li> )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default withStep(Autocomplete);