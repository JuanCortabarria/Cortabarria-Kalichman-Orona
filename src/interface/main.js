
import { Canchas } from "../domain/canchas.js";
import { ListaCanchas } from "../domain/listaCanchas.js";
import { Reservas } from "../domain/Reservas.js";
import { ListaReservas } from "../domain/listaReservas.js";

const mainListaCanchas = new ListaCanchas();
const mainListaReservas = new ListaReservas();

document.addEventListener("DOMContentLoaded", function () {
    // Formulario de canchas
    const btnAddCancha = document.getElementById('btn-add-cancha');
    const inpNombreCancha = document.getElementById('inp-nombre-cancha');
    const inpPrecioCancha = document.getElementById('inp-precio-cancha');
    const inpUbicacionCancha = document.getElementById('inp-ubicacion-cancha');
    const inpDescripcionCancha = document.getElementById('inp-descripcion-cancha');

    btnAddCancha.addEventListener('click', () => {
        const nuevaCancha = new Canchas(inpNombreCancha.value, parseFloat(inpPrecioCancha.value), inpUbicacionCancha.value, inpDescripcionCancha.value);
        const canchasErrorContainer = document.getElementById("add-canchas-error");
        const canchasError = document.getElementById("add-canchas-error-msg");

        try {
            mainListaCanchas.add(nuevaCancha);
            clearCanchaInputs();
            canchasErrorContainer.classList.add("d-none");
            loadCanchaList(nuevaCancha);
        } catch (error) {
            canchasErrorContainer.classList.remove("d-none");
            canchasError.innerText = error.message;
        }
    });

    function clearCanchaInputs() {
        inpNombreCancha.value = "";
        inpPrecioCancha.value = "";
        inpUbicacionCancha.value = "";
        inpDescripcionCancha.value = "";
    }

    function loadCanchaList(nuevaCancha) {
        const canchasList = document.getElementById("canchas-list");
        const canchasContainer = document.getElementById("canchas");
        const emptyList = document.getElementById("empty-canchas-list");

        emptyList.classList.add('d-none');
        canchasContainer.classList.remove("d-none");
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = nuevaCancha.toString();
        canchasList.appendChild(li);
    }

    inpDescripcionCancha.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            btnAddCancha.click();
        }
    });

    // Formulario de reservas
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
