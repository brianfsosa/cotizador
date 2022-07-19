export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
   let incremento 

   switch (marca) {
    case "Europeo":
        incremento = 1.30
        break;
    case "Americano":
        incremento = 1.15
        break;
    case "Asíatico":
        incremento = 1.05
        break;
    default:
        break;
   }

   return incremento
}

export function calcularPlan(plan){
    return (plan === '1' ? 1.2 : 1.5)
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}