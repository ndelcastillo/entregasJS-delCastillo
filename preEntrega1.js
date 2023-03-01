//promedio de tiempos de una carrera
let opcion = prompt("1: Ingreso \n2: Reporte \n0: Salir")
let contador = 0
let promedio = 0
let ganador = 0

while (opcion != 2) {
    console.log(opcion)
    switch (parseInt(opcion)) {
        case 1:
            let tiempo = prompt("Ingrese tiempo en segundos")
            if (parseInt(tiempo) < ganador || ganador == 0) {
                ganador = parseInt(tiempo)
            }
            contador++
            promedio = promedio + parseInt(tiempo)
            break;
    }
    opcion = prompt("1: Ingreso \n2: Reporte \n0: Salir")
}
console.log("REPORTE")
console.log("Contador: " + contador)
console.log("Promedio: " + (parseInt(promedio) / parseInt(contador)))
console.log("Menor tiempo: " + ganador)


