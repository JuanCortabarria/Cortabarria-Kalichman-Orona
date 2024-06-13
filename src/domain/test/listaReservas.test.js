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
    let expectedErrorMessage = 'No se pudo agregar. Cancha 1 ya está en la lista.';
    expect(() => listaReservasInstance.add(reserva)).toThrow(expectedErrorMessage);
  });

  test('Add an invalid reserva to the list', () => {
    let listaReservasInstance = new listaReservas();
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'Ingrese una fecha';
    expect(() => listaReservasInstance.add(reserva)).toThrow(expectedErrorMessage);
  });

  test('Get reservas from the list', () => {
    let listaReservasInstance = new listaReservas();
    let reserva1 = new reservas('Cancha 1');
    reserva1.setFecha('2023-06-12');
    reserva1.setHora('10:00');
    reserva1.setNombreCliente('Juan Perez');
    reserva1.setMailCliente('juan@example.com');
    let reserva2 = new reservas('Cancha 2');
    reserva2.setFecha('2023-06-13');
    reserva2.setHora('11:00');
    reserva2.setNombreCliente('Maria Gomez');
    reserva2.setMailCliente('maria@example.com');
    listaReservasInstance.add(reserva1);
    listaReservasInstance.add(reserva2);
    let reservas = listaReservasInstance.getReservas();
    expect(reservas.length).toBe(2);
    expect(reservas[0].getCancha()).toBe('Cancha 1');
    expect(reservas[1].getCancha()).toBe('Cancha 2');
  });
});
