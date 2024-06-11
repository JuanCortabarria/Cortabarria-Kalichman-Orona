// reservas.test.js
import { reservas } from './reservas';

describe('reservas class tests', () => {
  test('Create a valid reservas object', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    expect(reserva.getCancha()).toBe('Cancha 1');
    expect(reserva.getFecha()).toBe('2023-06-12');
    expect(reserva.getHora()).toBe('10:00');
    expect(reserva.getNombreCliente()).toBe('Juan Perez');
    expect(reserva.getMailCliente()).toBe('juan@example.com');
    expect(reserva.isValid()).toBe(true);
  });

  test('Throw error for invalid reservas object', () => {
    let reserva = new reservas('');
    reserva.setFecha('');
    reserva.setHora('');
    reserva.setNombreCliente('');
    reserva.setMailCliente('');
    let expectedErrorMessage = 'La cancha no puede ser vacía';
    expect(() => {
      reserva.isValid();
    }).toThrow(expectedErrorMessage);
  });
});
