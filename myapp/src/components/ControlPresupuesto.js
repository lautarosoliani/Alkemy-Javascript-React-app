import React, { Fragment } from "react"
import PropTypes from "prop-types"

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

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    resatnte: PropTypes.number.isRequired,
}

export default ControlPresupuesto
