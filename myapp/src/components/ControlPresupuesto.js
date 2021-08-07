import React, { Fragment } from "react"

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">Budget: ${presupuesto}</div>
            <div className="alert">Remaining: ${restante}</div>
        </Fragment>
    )
}

export default ControlPresupuesto
