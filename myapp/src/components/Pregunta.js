import React, { Fragment } from "react"

const Pregunta = () => {
    return (
        <Fragment>
            <h2>Set your Badget</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Enter your Bagget"
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
