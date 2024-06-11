// canchas.test.js
import { Canchas } from '../canchas';

describe('Canchas class tests', () => {
  test('Create a valid Canchas object', () => {
    let cancha = new Canchas('Padel', 100, 'Ubicacion 1', 'Descripcion 1');
    expect(cancha.getNombre()).toBe('Padel');
    expect(cancha.getPrecio()).toBe(100);
    expect(cancha.getUbicacion()).toBe('Ubicacion 1');
    expect(cancha.getDescripcion()).toBe('Descripcion 1');
    expect(cancha.isValid()).toBe(true);
  });

  test('Throw error for invalid Canchas object', () => {
    let expectedErrorMessage = "El nombre de la cancha no puede ser vacío";
    expect(() => {
      new Canchas('', -1, '', '').isValid();
    }).toThrow(expectedErrorMessage);
  });
});
