import { Canchas } from '../canchas';

describe('Canchas class tests', () => {

  // Tests for getters
  test('Get cancha price', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    expect(cancha.getPrecio()).toBe(100);
  });

  test('Get cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    expect(cancha.getUbicacion()).toBe('Ubicación 1');
  });

  test('Get cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    expect(cancha.getDescripcion()).toBe('Descripción 1');
  });

  // Tests for setters
  test('Set cancha name', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    cancha.setNombre('Nueva Cancha');
    expect(cancha.getNombre()).toBe('Nueva Cancha');
  });

  test('Set cancha price', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    cancha.setPrecio(200);
    expect(cancha.getPrecio()).toBe(200);
  });

  test('Set cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    cancha.setUbicacion('Nueva Ubicación');
    expect(cancha.getUbicacion()).toBe('Nueva Ubicación');
  });

  test('Set cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    cancha.setDescripcion('Nueva Descripción');
    expect(cancha.getDescripcion()).toBe('Nueva Descripción');
  });

  // Tests for validation errors
  test('Invalid cancha price', () => {
    let cancha = new Canchas('Cancha 1', -100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha location', () => {
    let cancha = new Canchas('Cancha 1', 100, '', 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha description', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', '');
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  // Additional tests to ensure all branches are covered
  test('Invalid cancha price is undefined', () => {
    let cancha = new Canchas('Cancha 1', undefined, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha price is null', () => {
    let cancha = new Canchas('Cancha 1', null, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha price is NaN', () => {
    let cancha = new Canchas('Cancha 1', 'NaN', 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha location is undefined', () => {
    let cancha = new Canchas('Cancha 1', 100, undefined, 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha location is null', () => {
    let cancha = new Canchas('Cancha 1', 100, null, 'Descripción 1');
    let expectedErrorMessage = 'La ubicación de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha description is undefined', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', undefined);
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid cancha description is null', () => {
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', null);
    let expectedErrorMessage = 'La descripción de la cancha no puede ser vacía';
    expect(() => cancha.isValid()).toThrow(expectedErrorMessage);
  });

  test('Valid cancha with all valid properties', () => {
    let cancha = new Canchas('Cancha Valida', 100, 'Ubicación Valida', 'Descripción Valida');
    expect(cancha.isValid()).toBe(true);
  });
});
