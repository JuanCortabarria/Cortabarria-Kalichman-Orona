// listaCanchas.test.js
import { ListaCanchas } from './listaCanchas';
import { Canchas } from './canchas';

describe('ListaCanchas', () => {
  test('should add a valid cancha to the list', () => {
    const lista = new ListaCanchas();
    const cancha = new Canchas('Futbol', 100, 'Ubicacion 1', 'Descripcion 1');
    lista.add(cancha);
    expect(lista.getCanchas().length).toBe(1);
  });

  test('should throw error for duplicate cancha', () => {
    const lista = new ListaCanchas();
    const cancha = new Canchas('Futbol', 100, 'Ubicacion 1', 'Descripcion 1');
    lista.add(cancha);
    expect(() => {
      lista.add(cancha);
    }).toThrow();
  });
});
