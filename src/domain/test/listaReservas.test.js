//listaReservas.test.js
import { listaReservas } from './listaReservas';
import { reservas } from './reservas';

describe('listaReservas', () => {
  test('should add a valid reserva to the list', () => {
    const lista = new listaReservas();
    const reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    lista.add(reserva);
    expect(lista.getReservas().length).toBe(1);
  });

  test('should throw error for duplicate reserva', () => {
    const lista = new listaReservas();
    const reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    lista.add(reserva);
    expect(() => {
      lista.add(reserva);
    }).toThrow();
  });
});
