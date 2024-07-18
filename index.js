
const datos = [];

function solicitarDatos() {
    const nombre = prompt("Ingresa tu nombre:");
    if (nombre === null) {
        alert("Operación cancelada. No se ingresaron datos.");
        return;
    } else if (nombre.trim() === "") {
        alert("El nombre no puede estar vacío. Por favor, intenta de nuevo.");
        return;
    }
    const apellido = prompt("Ingresa tu apellido:");
    if (apellido === null) {
        alert("Operación cancelada. No se ingresaron datos.");
        return;
    } else if (apellido.trim() === "") {
        alert("El apellido no puede estar vacío. Por favor, intenta de nuevo.");
        return;
    }
    const edad = prompt("Ingresa tu edad:");
    if (edad === null) {
        alert("Operación cancelada. No se ingresaron datos.");
        return;
    } else if (edad.trim() === "") {
        alert("La edad no puede estar vacío. Por favor, intenta de nuevo.");
        return;
    }
    const confirmar = confirm(`¿Es correcta la información?\nNombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`);
    if (confirmar) {
        const persona = {
            nombre: nombre,
            apellido: apellido,
            edad:edad
        };
        datos.push(persona);
        alert("Datos guardados exitosamente.");
        console.log("Datos actuales:", datos);
    } else {
        alert("Operación cancelada. No se ingresaron datos.");
        return;
    }
}
