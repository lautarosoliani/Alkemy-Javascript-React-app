import React, { Fragment, useState } from "react"

const Pregunta = () => {
    //definir el State
    const [cantidad, guardarCantidad] = useState(0)

    //funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault()
    }

    return (
        <Fragment>
            <h2>Set your Badget</h2>
            <form>
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
