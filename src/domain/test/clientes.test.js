// clientes.test.js
import { clientes } from '../clientes';

describe('clientes class tests', () => {
  test('Create a valid clientes object', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@example.com');
    expect(cliente.getNombre()).toBe('Juan Perez');
    expect(cliente.toString()).toBe('Cliente: Juan Perez - Mail: juan@example.com');
    expect(cliente.isValid()).toBe(true);
  });

  test('Throw error for invalid clientes object', () => {
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    let cliente = new clientes('');
    cliente.setCapital('invalidemail');
    expect(() => {
      cliente.isValid();
    }).toThrow(expectedErrorMessage);
  });
});

