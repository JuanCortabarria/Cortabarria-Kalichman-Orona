// clientes.test.js
import { clientes } from './clientes';

describe('clientes', () => {
  test('should create a valid clientes object', () => {
    const cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@example.com');
    expect(cliente.getNombre()).toBe('Juan Perez');
    expect(cliente.toString()).toBe('Cliente: Juan Perez - Mail: juan@example.com');
    expect(cliente.isValid()).toBe(true);
  });

  test('should throw error for invalid clientes object', () => {
    expect(() => {
      const cliente = new clientes('');
      cliente.setCapital('invalidemail');
      cliente.isValid();
    }).toThrow();
  });
});
