// listaReservas.test.js
import { listaReservas } from '../listaReservas';
import { reservas } from '../reservas';

describe('listaReservas class tests', () => {
  test('Add a valid reserva to the list', () => {
    let lista = new listaReservas();
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    lista.add(reserva);
    expect(lista.getReservas().length).toBe(1);
  });

  test('Throw error for duplicate reserva', () => {
    let lista = new listaReservas();
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    lista.add(reserva);
    let expectedErrorMessage = "No se pudo agregar. Cancha 1 ya está en la lista.";
    expect(() => {
      lista.add(reserva);
    }).toThrow(expectedErrorMessage);
  });
});
