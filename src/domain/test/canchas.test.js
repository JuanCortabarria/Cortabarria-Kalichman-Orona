import { Canchas } from '../canchas';

describe('Canchas class tests', () => {

  test('Create a cancha', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    let canchaName = cancha.getNombre();
    let expectedName = 'Cancha 1';
    expect(canchaName).toBe(expectedName);
  });

  test('Invalid null cancha name', () => {
    let cancha = new Canchas(null, 100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El nombre de la cancha no puede ser vacío';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cancha name', () => {
    let cancha = new Canchas(undefined, 100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El nombre de la cancha no puede ser vacío';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cancha name', () => {
    let cancha = new Canchas('', 100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El nombre de la cancha no puede ser vacío';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha name with numbers', () => {
    let cancha = new Canchas('Cancha123', 100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El nombre de la cancha solo puede contener letras y espacios';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null cancha price', () => {
    let cancha = new Canchas('Cancha 1', null, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cancha price', () => {
    let cancha = new Canchas('Cancha 1', undefined, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid negative cancha price', () => {
    let cancha = new Canchas('Cancha 1', -100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, null, 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, undefined, 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, '', 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', null);
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', undefined);
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', '');
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Valid cancha', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    expect(cancha.isValid()).toBe(true);
  });

  test('ToString cancha', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    let expectedString = 'Cancha: Cancha 1 - Precio: 100 - Ubicación: Ubicación 1 - Descripción: Descripción 1';
    expect(cancha.toString()).toBe(expectedString);
  });
});

