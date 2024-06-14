import { ListaCanchas } from '../listaCanchas';
import { Canchas } from '../canchas';

describe('ListaCanchas class tests', () => {
    test('Add a cancha to the list', () => {
        const listaCanchasInstance = new ListaCanchas();
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        listaCanchasInstance.add(cancha);
        const canchasList = listaCanchasInstance.getCanchas();
        expect(canchasList).toContain(cancha);
    });

    test('Add a repeated cancha to the list', () => {
        const listaCanchasInstance = new ListaCanchas();
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        listaCanchasInstance.add(cancha);
        const expectedErrorMessage = `No se pudo agregar. Cancha ${cancha.getNombre()} ya está en la lista.`;
        expect(() => listaCanchasInstance.add(cancha)).toThrow(expectedErrorMessage);
    });



    test('Add an invalid object to the list (not an instance of Canchas)', () => {
        const listaCanchasInstance = new ListaCanchas();
        const invalidCancha = { nombre: 'Cancha 1', precio: 100, ubicacion: 'Ubicación 1', descripcion: 'Descripción 1' }; // Not an instance of Canchas
        const expectedErrorMessage = 'Solo se pueden agregar objetos de tipo Canchas';
        expect(() => listaCanchasInstance.add(invalidCancha)).toThrow(expectedErrorMessage);
    });

    test('Get canchas from the list', () => {
        const listaCanchasInstance = new ListaCanchas();
        const cancha1 = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        listaCanchasInstance.add(cancha1);
        const cancha2 = new Canchas('Cancha 2', 200, 'Ubicación 2', 'Descripción 2');
        listaCanchasInstance.add(cancha2);
        const canchasList = listaCanchasInstance.getCanchas();
        expect(canchasList).toContain(cancha1);
        expect(canchasList).toContain(cancha2);
    });
});
