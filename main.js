// Lista de servicios de fisioterapia disponibles
let servicios = ["Entrenamiento Personalizado", "Rehabilitación Física"];

// Precios por sesión para cada servicio
const precios = {
    "Entrenamiento Personalizado": 15000,
    "Rehabilitación Física": 34000
};

// Opciones de sesiones para cada servicio
const sesiones = {
    "Entrenamiento Personalizado": [8, 12, 20],
    "Rehabilitación Física": [4, 10, 12]
};

// Función para mostrar los servicios disponibles
function mostrarServicios() {
    let listaServicios = "Elige un servicio de fisioterapia:\n";
    for (let i = 0; i < servicios.length; i++) {
        listaServicios += (i + 1) + ". " + servicios[i] + "\n";
    }
    return listaServicios;
}

// Función para calcular el precio total
function calcularPrecioTotal(servicio, cantidadSesiones) {
    let precioTotal = cantidadSesiones * precios[servicio];
    // Aplicar descuento si se elige el máximo de sesiones
    if (cantidadSesiones === Math.max(...sesiones[servicio])) {
        precioTotal *= 0.90;  // Aplica 10% de descuento
        alert("¡Se ha aplicado un 10% de descuento por elegir el máximo de sesiones!");
    }
    return precioTotal;
}

// Función principal del simulador
function simuladorFisioterapia() {
    // Mostrar lista de servicios y obtener elección del usuario
    let eleccionServicio = prompt(mostrarServicios());
    
    // Validar la elección del servicio
    if (eleccionServicio < 1 || eleccionServicio > servicios.length) {
        alert("Elección no válida. Intenta de nuevo.");
        return;
    }

    // Obtener el servicio seleccionado
    let servicioElegido = servicios[eleccionServicio - 1];
    
    // Mostrar las opciones de sesiones para el servicio elegido
    let opcionesSesiones = sesiones[servicioElegido].join(", ");
    let eleccionSesiones = parseInt(prompt(`¿Cuántas sesiones deseas tomar para ${servicioElegido}? Opciones: ${opcionesSesiones}`));
    
    // Validar la cantidad de sesiones elegida
    if (!sesiones[servicioElegido].includes(eleccionSesiones)) {
        alert("Número de sesiones no válido. Intenta de nuevo.");
        return;
    }
    
    // Preguntar si desea reservar
    let deseaReservar = confirm(`¿Deseas reservar ${eleccionSesiones} sesiones de ${servicioElegido}?`);
    
    if (deseaReservar) {
        // Calcular el precio total
        let precioFinal = calcularPrecioTotal(servicioElegido, eleccionSesiones);
        
        // Mostrar el precio total al usuario
        alert(`Has seleccionado ${eleccionSesiones} sesiones de ${servicioElegido}.\nPrecio total: $${precioFinal}`);
    } else {
        alert("Reserva cancelada.");
    }

    // Mostrar mensaje motivacional siempre al finalizar el simulador
    alert("¡Recuerda que tu salud es lo más importante! ¡Sigue cuidándote y avanzando hacia una mejor versión de ti mismo!");
}

// Ejecutar el simulador
simuladorFisioterapia();
