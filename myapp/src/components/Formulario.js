import React, { useState } from "react"
import PropTypes from "prop-types"
import shortid from "shortid"

import Error from "./Error"

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
    const [nombre, guardarNombre] = useState("")
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //cuando el usuario agrega un gasto
    const agregarGasto = (e) => {
        e.preventDefault()

        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
            guardarError(true)
            return
        }
        guardarError(false)
        //construir el gasto

        const gasto = {
            nombre, //es lo mismo que poner 'nombre: nombre'
            cantidad,
            id: shortid.generate(),
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)
        //resetear el form
        guardarNombre("")
        guardarCantidad(0)
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Add your expenses here</h2>
            {error ? <Error mensaje="Error" /> : null}
            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Example: Transport"
                    value={nombre}
                    onChange={(e) => guardarNombre(e.target.value)}
                ></input>
            </div>
            <div className="campo">
                <label>Expense Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Example: 100"
                    value={cantidad}
                    onChange={(e) =>
                        guardarCantidad(parseInt(e.target.value, 10))
                    }
                ></input>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Add"
                ></input>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}

export default Formulario
