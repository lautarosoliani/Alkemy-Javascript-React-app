import React, { useState } from "react"

const Formulario = () => {
    return (
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Example: Transport"
                ></input>
            </div>
            <div className="campo">
                <label>Expense Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Example: 100"
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

export default Formulario
