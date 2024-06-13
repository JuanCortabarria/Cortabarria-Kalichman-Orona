import { ListaCanchas } from '../listaCanchas';
import { Canchas } from '../canchas';

describe('ListaCanchas class tests', () => {

  test('Add a cancha to the list', () => {
    let listaCanchas = new ListaCanchas();
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    listaCanchas.add(cancha);
    let expectedLength = 1;
    expect(listaCanchas.getCanchas().length).toBe(expectedLength);
  });

  test('Add a repeated cancha to the list', () => {
    let listaCanchas = new ListaCanchas();
    let cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    listaCanchas.add(cancha);
    let expectedErrorMessage = 'No se pudo agregar. Cancha Cancha 1 ya está en la lista.';
    expect(() => listaCanchas.add(cancha)).toThrow(expectedErrorMessage);
  });

  test('Add an invalid cancha to the list', () => {
    let listaCanchas = new ListaCanchas();
    let cancha = new Canchas('Cancha 1', -100, 'Ubicación 1', 'Descripción 1');
    let expectedErrorMessage = 'El precio de la cancha debe ser un número positivo';
    expect(() => listaCanchas.add(cancha)).toThrow(expectedErrorMessage);
  });

  test('Get canchas from the list', () => {
    let listaCanchas = new ListaCanchas();
    let cancha1 = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
    let cancha2 = new Canchas('Cancha 2', 150, 'Ubicación 2', 'Descripción 2');
    listaCanchas.add(cancha1);
    listaCanchas.add(cancha2);
    let canchas = listaCanchas.getCanchas();
    expect(canchas.length).toBe(2);
    expect(canchas[0].getNombre()).toBe('Cancha 1');
    expect(canchas[1].getNombre()).toBe('Cancha 2');
  });
});
