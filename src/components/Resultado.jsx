import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants/'

function Resultado() {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan) )
    
    if (resultado === 0 ) return null
    
    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marca}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del auto: </span>
                {year}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total de cotización: </span>
                ${resultado}
            </p>
            
        </div>
    )
}

export default Resultado