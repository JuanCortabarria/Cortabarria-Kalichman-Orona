import { Country } from "../country";
import { CountryList } from "../countrylist";

describe("CountryList class tests", () => {

    test ("Create an empty country list", () =>{
        let countryList = new CountryList();
        let expectedLength = 0;
        expect(countryList.getCountries().length).toBe(expectedLength);
    });

    test ("Add a country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        countryList.add(country);
        let expectedLength = 1;
        expect(countryList.getCountries().length).toBe(expectedLength);
    });

    test ("Add a repeated country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("Uruguay");
        country.setCapital("Montevideo");
        countryList.add(country);
        let expectedErrorMessage = "No se pudo agregar. Uruguay ya está en la lista.";
        expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
    });

    test ("Add an invalid country to the list", () =>{
        let countryList = new CountryList();
        let country = new Country("");
        let expectedErrorMessage = "El nombre del país no puede ser vacío";
        expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
    });
});

/**
 * @jest-environment jsdom
 */

import { seleccionarCancha } from './main'; // Ajusta la ruta según sea necesario

// Mock del localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
        },
        clear: () => {
            store = {};
        },
        removeItem: (key) => {
            delete store[key];
        },
    };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('seleccionarCancha', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="nav-reserva-tab"></div>
            <select id="cancha">
                <option value="World Padel Center Montevideo">World Padel Center Montevideo</option>
                <option value="Indoor Padel Montevideo">Indoor Padel Montevideo</option>
                <option value="Reducto Padel Center">Reducto Padel Center</option>
                <option value="Cancha Boss Padel">Cancha Boss Padel</option>
                <option value="Lagomar Padel Club">Lagomar Padel Club</option>
            </select>
        `;

        // Mock de la función click
        document.getElementById("nav-reserva-tab").click = jest.fn();
    });

    test('debería seleccionar la cancha y cambiar a la pestaña de reserva', () => {
        seleccionarCancha('Indoor Padel Montevideo');

        // Verificar que el nombre de la cancha seleccionada está guardado
        expect(window.nombreCanchaSeleccionada).toBe('Indoor Padel Montevideo');

        // Verificar que se hizo click en la pestaña de reserva
        expect(document.getElementById("nav-reserva-tab").click).toHaveBeenCalled();

        // Verificar que el valor del campo de selección de cancha se actualizó
        expect(document.getElementById("cancha").value).toBe('Indoor Padel Montevideo');
    });
});

describe('reservaForm', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <form id="reserva-form">
                <select name="cancha" id="cancha">
                    <option value="World Padel Center Montevideo">World Padel Center Montevideo</option>
                </select>
                <input type="date" name="fecha" id="fecha">
                <input type="time" name="hora" id="hora">
                <input type="text" name="nombre" id="nombre">
                <input type="email" name="email" id="email">
                <button type="submit">Reservar</button>
            </form>
            <div id="historial-btn"></div>
            <div id="modalTitle"></div>
            <div id="modalBody"></div>
            <div class="modal" id="myModal"></div>
        `;

        localStorage.clear();
    });

    test('debería guardar una reserva en el localStorage', () => {
        const reservaForm = document.getElementById('reserva-form');

        reservaForm.cancha.value = "World Padel Center Montevideo";
        reservaForm.fecha.value = "2024-06-06";
        reservaForm.hora.value = "10:00";
        reservaForm.nombre.value = "John Doe";
        reservaForm.email.value = "john@example.com";

        reservaForm.dispatchEvent(new Event('submit'));

        const reservas = JSON.parse(localStorage.getItem('reservas'));

        expect(reservas).toHaveLength(1);
        expect(reservas[0]).toEqual({
            cancha: "World Padel Center Montevideo",
            fecha: "2024-06-06",
            hora: "10:00",
            nombre: "John Doe",
            email: "john@example.com"
        });
    });

    test('debería mostrar un modal de error si la cancha ya está reservada', () => {
        const reservaForm = document.getElementById('reserva-form');
        const mostrarModal = jest.fn();
        window.mostrarModal = mostrarModal;

        const reservaData = {
            cancha: "World Padel Center Montevideo",
            fecha: "2024-06-06",
            hora: "10:00",
            nombre: "John Doe",
            email: "john@example.com"
        };
        localStorage.setItem('reservas', JSON.stringify([reservaData]));

        reservaForm.cancha.value = "World Padel Center Montevideo";
        reservaForm.fecha.value = "2024-06-06";
        reservaForm.hora.value = "10:00";
        reservaForm.nombre.value = "Jane Doe";
        reservaForm.email.value = "jane@example.com";

        reservaForm.dispatchEvent(new Event('submit'));

        expect(mostrarModal).toHaveBeenCalledWith("Error de Reserva", "La cancha no está disponible en ese horario. Por favor, elige otro horario o cancha.");
    });
});
