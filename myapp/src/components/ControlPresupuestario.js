import React, { Fragment } from "react"

const ControlPresupuestario = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">Budget: ${presupuesto} </div>
            <div className="alert">Remaining: ${restante} </div>
        </Fragment>
    )
}

export default ControlPresupuestario
