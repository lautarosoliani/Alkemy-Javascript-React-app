import React, { Fragment, useState } from "react"
import Error from "./Error"

const Pregunta = () => {
    //definir el State
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    //funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault() //para que no recargue la pagina

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        //si se pasa la validacion
        guardarError(false)
    }

    return (
        <Fragment>
            <h2>Set your Badget</h2>
            {error ? <Error mensaje="Try again!" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your Bagget"
                    onChange={definirPresupuesto}
                ></input>

                <input
                    type="submit"
                    className="u-full-width"
                    placeholder="Submit Budget"
                ></input>
            </form>
        </Fragment>
    )
}

export default Pregunta
