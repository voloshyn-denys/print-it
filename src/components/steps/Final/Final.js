import React from "react";
import { Link, useParams } from "react-router-dom";
import withStep from "../../hoc_helpers/withStep";

const Final = ({ services, removeItem }) => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <>
      <h3>Answer the final quetions and start your design:</h3>
      {(services.length && (
        <div className="form">
          {services.map(({ id, title }) => {
            return (
              <div className="form-group " key={id}>
                <div className="input-effect">
                  <input type="text" className="effect-17" id={`form-${id}`} />
                  <label htmlFor={`form-${id}`}>{title}</label>
                  <span className="focus-border"></span>
                </div>
                <a href="" onClick={evt => {
                    evt.preventDefault();
                    removeItem(id);
                  }}
                > Delete
                </a>
              </div>
            );
          })}
        </div>
      )) || (
        <div>
          <p>We have all the information required to create your Design...</p>
        </div>
      )}

      <div className="mt-20">
        <Link className="button pulse unbordered" to={"/editor"}>
          Start Design
        </Link>
      </div>
    </>
  );
};

export default withStep(Final);
