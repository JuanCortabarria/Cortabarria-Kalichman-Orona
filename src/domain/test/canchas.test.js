// canchas.test.js
import { Canchas } from './canchas';

describe('Canchas', () => {
  test('should create a valid Canchas object', () => {
    const cancha = new Canchas('Futbol', 100, 'Ubicacion 1', 'Descripcion 1');
    expect(cancha.getNombre()).toBe('Futbol');
    expect(cancha.getPrecio()).toBe(100);
    expect(cancha.getUbicacion()).toBe('Ubicacion 1');
    expect(cancha.getDescripcion()).toBe('Descripcion 1');
    expect(cancha.isValid()).toBe(true);
  });

  test('should throw error for invalid Canchas object', () => {
    expect(() => {
      new Canchas('', -1, '', '');
    }).toThrow();
  });
});
