// listaCanchas.test.js
import { ListaCanchas } from '../listaCanchas';
import { Canchas } from '../canchas';

describe('ListaCanchas class tests', () => {
  test('Add a valid cancha to the list', () => {
    let lista = new ListaCanchas();
    let cancha = new Canchas('Padel', 100, 'Ubicacion 1', 'Descripcion 1');
    lista.add(cancha);
    expect(lista.getCanchas().length).toBe(1);
  });

  test('Throw error for duplicate cancha', () => {
    let lista = new ListaCanchas();
    let cancha = new Canchas('Padel', 100, 'Ubicacion 1', 'Descripcion 1');
    lista.add(cancha);
    let expectedErrorMessage = "No se pudo agregar. Padel ya está en la lista.";
    expect(() => {
      lista.add(cancha);
    }).toThrow(expectedErrorMessage);
  });
});

