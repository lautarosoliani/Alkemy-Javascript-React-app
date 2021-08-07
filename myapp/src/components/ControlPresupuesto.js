import React, { Fragment } from "react"
import { revisarPresupuesto } from "../helpers"

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">Budget: ${presupuesto}</div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Remaining: ${restante}
            </div>
        </Fragment>
    )
}

export default ControlPresupuesto
