document.addEventListener("DOMContentLoaded", function () {
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
                alert("La cancha no está disponible en ese horario. Por favor, elige otro horario o cancha.");
            } else {
                reservas.push(reservaData);
                localStorage.setItem("reservas", JSON.stringify(reservas));
                const mensaje = `Reserva realizada con éxito:\n\nCancha: ${cancha}\nFecha: ${fecha}\nHora: ${hora}\nNombre: ${nombre}\nEmail: ${email}\n\n¡Disfruta tu juego!`;
                alert(mensaje);
                reservaForm.reset();
            }
        } else {
            alert("La cancha no está disponible en ese horario. Por favor, elige otro horario o cancha.");
        }
    });

    function mostrarHistorialReservas() {
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        if (reservas.length === 0) {
            alert("No hay reservas en el historial.");
        } else {
            let mensajeHistorial = "Historial de Reservas:\n\n";
            reservas.forEach(reserva => {
                mensajeHistorial += `Cancha: ${reserva.cancha}\nFecha: ${reserva.fecha}\nHora: ${reserva.hora}\nNombre: ${reserva.nombre}\nEmail: ${reserva.email}\n\n`;
            });
            alert(mensajeHistorial);
        }
    }

    const historialBtn = document.getElementById("historial-btn");
    historialBtn.addEventListener("click", mostrarHistorialReservas);

    const formConsulta = document.getElementById("form-consulta");
    formConsulta.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Su consulta fue enviada, le responderemos a la brevedad.');
        formConsulta.reset();
    });
});

function seleccionarCancha(nombreCancha) {
    document.getElementById('cancha').value = nombreCancha;
    window.location.href = '#reserva-cancha'; // Dirige al formulario de reserva de cancha
}
