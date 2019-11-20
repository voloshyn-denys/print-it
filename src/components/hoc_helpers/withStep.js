import React from "react";

const withStep = (View) => {
    return (props) => {
        return(
            <section className="step">
                <View {...props} />
            </section>
        )
    }
}

export default withStep;