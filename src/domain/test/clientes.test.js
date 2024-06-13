import { clientes } from '../clientes';

describe('Clientes class tests', () => {

  test('Create a cliente', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@example.com');
    let nombreCliente = cliente.getNombre();
    let expectedName = 'Juan Perez';
    expect(nombreCliente).toBe(expectedName);
  });

  test('Invalid null cliente name', () => {
    let cliente = new clientes(null);
    cliente.setCapital('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cliente name', () => {
    let cliente = new clientes(undefined);
    cliente.setCapital('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cliente name', () => {
    let cliente = new clientes('');
    cliente.setCapital('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cliente name with numbers', () => {
    let cliente = new clientes('Juan123');
    cliente.setCapital('juan@example.com');
    let expectedErrorMessage = 'El nombre del cliente no puede contener números';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null cliente email', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital(null);
    let expectedErrorMessage = 'El mail del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cliente email', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital(undefined);
    let expectedErrorMessage = 'El mail del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cliente email', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('');
    let expectedErrorMessage = 'El mail del cliente no puede ser vacío';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid formatted cliente email', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@');
    let expectedErrorMessage = 'El mail del cliente no está bien formateado';
    expect(() => cliente.isValid()).toThrow(expectedErrorMessage);
  });

  test('Valid cliente', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@example.com');
    expect(cliente.isValid()).toBe(true);
  });

  test('ToString cliente', () => {
    let cliente = new clientes('Juan Perez');
    cliente.setCapital('juan@example.com');
    let expectedString = 'Cliente: Juan Perez - Mail: juan@example.com';
    expect(cliente.toString()).toBe(expectedString);
  });
});
