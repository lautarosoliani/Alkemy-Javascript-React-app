import React, { useState, useEffect } from "react"
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
    const [gasto, guardarGasto] = useState({})
    const [creargasto, guardarCrearGasto] = useState(false)

    // useEffect para actualizar el restante
    useEffect(() => {
        if (creargasto) {
            //agrega el nuevo presupuesto
            guardarGastos([...gastos, gasto])

            //resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad
            guardarRestante(presupuestoRestante)

            //y cuando termina que se resetee a 'false'
            guardarCrearGasto(false)
        }
    }, [gasto])

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
                                    guardarGasto={guardarGasto}
                                    guardarCrearGasto={guardarCrearGasto}
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
