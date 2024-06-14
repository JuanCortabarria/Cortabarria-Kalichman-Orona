import { reservas } from '../reservas';
import { listaReservas } from '../listaReservas';

describe('ListaReservas class tests', () => {

  test('Create an empty reserva list', () => {
    let listaReservasInstance = new listaReservas();
    let expectedLength = 0;
    expect(listaReservasInstance.getReservas().length).toBe(expectedLength);
  });

  test('Add a reserva to the list', () => {
    let listaReservasInstance = new listaReservas();
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    listaReservasInstance.add(reserva);
    let expectedLength = 1;
    expect(listaReservasInstance.getReservas().length).toBe(expectedLength);
  });

  test('Add a repeated reserva to the list', () => {
    let listaReservasInstance = new listaReservas();
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    listaReservasInstance.add(reserva);
    let expectedErrorMessage = 'No se pudo agregar. Reserva para la cancha Cancha 1 ya está en la lista.';
    expect(() => listaReservasInstance.add(reserva)).toThrow(expectedErrorMessage);
  });

  test('Add an invalid object to the list (not an instance of reservas)', () => {
    let listaReservasInstance = new listaReservas();
    let invalidReserva = { cancha: 'Cancha 1', fecha: '2023-06-12', hora: '10:00', nombreCliente: 'Juan Perez', mailCliente: 'juan@example.com' }; // No es una instancia de reservas
    let expectedErrorMessage = 'Solo se pueden agregar objetos de tipo reservas';
    expect(() => listaReservasInstance.add(invalidReserva)).toThrow(expectedErrorMessage);
  });

  test('Add a valid reserva to the list', () => {
    let listaReservasInstance = new listaReservas();
    let validReserva = new reservas('Cancha 1');
    validReserva.setFecha('2023-06-12');
    validReserva.setHora('10:00');
    validReserva.setNombreCliente('Juan Perez');
    validReserva.setMailCliente('juan@example.com');
    listaReservasInstance.add(validReserva);
    expect(listaReservasInstance.getReservas().length).toBe(1);
  });

});

