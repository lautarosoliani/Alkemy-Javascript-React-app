import React, { useState } from "react"
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import ControlPresupuesto from "./components/ControlPresupuesto"


function App() {
    //definir state
    const [presupuesto, guardarPresupuesto] = useState(0)
    const [restante, guardarRestante] = useState(0)
    // "carga condicional de componentes"
    //--> para mostrar 'set your badget' al principio
    //--> y luego, para ocultarlo y mostrar 'Add your expenses here'
    const [mostrarpregunta, actualizarPregunta] = useState(true)
    const [gastos, guardarGastos] = useState([])

    const agregarNuevoGasto = (gasto) => {
        guardarGastos([...gastos, gasto])
    }

    return (
        <div className="container">
            <header>
                <h1>Weekly budget</h1>
                <div className="contenido-principal contenido">
                    {mostrarpregunta ? (
                        <Pregunta
                            guardarPresupuesto={guardarPresupuesto}
                            guardarRestante={guardarRestante}
                            actualizarPregunta={actualizarPregunta}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
                                    agregarNuevoGasto={agregarNuevoGasto}
                                />
                            </div>
                            <div className="one-half column">

                                <Listado gastos={gastos} />
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                ></ControlPresupuesto>

                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default App
