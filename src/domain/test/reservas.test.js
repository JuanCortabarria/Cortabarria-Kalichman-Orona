import { reservas } from '../reservas';

describe('Reservas class tests', () => {

  test('Create a reserva', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let cancha = reserva.getCancha();
    let expectedCancha = 'Cancha 1';
    expect(cancha).toBe(expectedCancha);
  });

  test('Invalid null cancha', () => {
    let reserva = new reservas(null);
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'La cancha no puede ser vacía';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cancha', () => {
    let reserva = new reservas('');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'La cancha no puede ser vacía';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null fecha', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha(null);
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'Ingrese una fecha';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty fecha', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'Ingrese una fecha';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null hora', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora(null);
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'Ingrese una hora';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty hora', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'Ingrese una hora';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null nombre cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente(null);
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty nombre cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid nombre cliente with numbers', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan123');
    reserva.setMailCliente('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede contener números';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null mail cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente(null);
    let expectedErrorMessage = 'El mail del cliente no puede ser vacío';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty mail cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('');
    let expectedErrorMessage = 'El mail del cliente no puede ser vacío';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid formatted mail cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@');
    let expectedErrorMessage = 'El mail del cliente no está bien formateado';
    expect(() => reserva.isValid()).toThrow(expectedErrorMessage);
  });

  test('Valid reserva', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    expect(reserva.isValid()).toBe(true);
  });

  test('ToString reserva', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setFecha('2023-06-12');
    reserva.setHora('10:00');
    reserva.setNombreCliente('Juan Perez');
    reserva.setMailCliente('juan@example.com');
    let expectedString = 'Reserva: Cancha: Cancha 1, Fecha: 2023-06-12, Hora: 10:00, Cliente: Juan Perez, Email: juan@example.com';
    expect(reserva.toString()).toBe(expectedString);
  });

  test('Get nombre cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setNombreCliente('Juan Perez');
    let expectedNombre = 'Juan Perez';
    expect(reserva.getNombreCliente()).toBe(expectedNombre);
  });

  test('Get mail cliente', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setMailCliente('juan@example.com');
    let expectedMail = 'juan@example.com';
    expect(reserva.getMailCliente()).toBe(expectedMail);
  });

  test('Set cancha', () => {
    let reserva = new reservas('Cancha 1');
    reserva.setCancha('Cancha 2');
    let expectedCancha = 'Cancha 2';
    expect(reserva.getCancha()).toBe(expectedCancha);
  });
});
