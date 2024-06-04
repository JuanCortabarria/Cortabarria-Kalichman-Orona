// Función para seleccionar una cancha y cambiar a la pestaña de reserva
function seleccionarCancha(nombreCancha) {
    // Guardar el nombre de la cancha seleccionada en una variable global
    window.nombreCanchaSeleccionada = nombreCancha;

    // Cambiar a la pestaña de reserva
    const reservaTab = document.getElementById("nav-reserva-tab");
    reservaTab.click();

    // Actualizar el valor del campo de selección de cancha en el formulario de reserva
    const canchaSelect = document.getElementById("cancha");
    canchaSelect.value = nombreCancha;
}

document.addEventListener("DOMContentLoaded", function () {
    // Agregar evento de envío para el formulario de reserva
    const reservaForm = document.getElementById("reserva-form");
    reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cancha = reservaForm.cancha.value;
        const fecha = reservaForm.fecha.value;
        const hora = reservaForm.hora.value;
        const nombre = reservaForm.nombre.value;
        const email = reservaForm.email.value;

        // Simulemos que la cancha está disponible
        const canchaDisponible = true;

        if (canchaDisponible) {
            const reservaData = {
                cancha: cancha,
                fecha: fecha,
                hora: hora,
                nombre: nombre,
                email: email
            };

            const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

            const reservaRepetida = reservas.some(reserva => {
                return (
                    reserva.cancha === cancha &&
                    reserva.fecha === fecha &&
                    reserva.hora === hora
                );
            });

            if (reservaRepetida) {
                mostrarModal("Error de Reserva", "La cancha no está disponible en ese horario. Por favor, elige otro horario o cancha.");
            } else {
                reservas.push(reservaData);
                localStorage.setItem("reservas", JSON.stringify(reservas));
                const mensaje = `Reserva realizada con éxito:<br>Cancha: ${cancha}<br>Fecha: ${fecha}<br>Hora: ${hora}<br>Nombre: ${nombre}<br>Email: ${email}<br>¡Disfruta tu juego!`;
                mostrarModal("Reserva Exitosa", mensaje);
                reservaForm.reset();
            }
        } else {
            mostrarModal("Error de Reserva", "La cancha no está disponible en ese horario. Por favor, elige otro horario o cancha.");
        }
    });

    // Función para mostrar el historial de reservas
    function mostrarHistorialReservas() {
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        if (reservas.length === 0) {
            mostrarModal("Historial de Reservas", "No hay reservas en el historial.");
        } else {
            let mensajeHistorial = "Historial de Reservas:<br><br>";
            reservas.forEach(reserva => {
                mensajeHistorial += `Cancha: ${reserva.cancha}<br>Fecha: ${reserva.fecha}<br>Hora: ${reserva.hora}<br>Nombre: ${reserva.nombre}<br>Email: ${reserva.email}<br><br>`;
            });
            mostrarModal("Historial de Reservas", mensajeHistorial);
        }
    }

    // Agregar evento de clic al botón de historial de reservas
    const historialBtn = document.getElementById("historial-btn");
    historialBtn.addEventListener("click", mostrarHistorialReservas);

    // Agregar evento de envío para el formulario de consulta
    const formConsulta = document.getElementById("form-consulta");
    formConsulta.addEventListener("submit", function (event) {
        event.preventDefault();
        mostrarModal("Consulta Enviada", "Su consulta fue enviada, le responderemos a la brevedad.");
        formConsulta.reset();
    });

    // Función para mostrar un modal
    function mostrarModal(titulo, mensaje) {
        const modalTitle = document.getElementById("modalTitle");
        const modalBody = document.getElementById("modalBody");
        modalTitle.innerHTML = titulo;
        modalBody.innerHTML = mensaje;
        const myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
    }
});
