import { Canchas } from '../canchas';

describe('Canchas class tests', () => {
    test('Create instance of Canchas', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha).toBeInstanceOf(Canchas);
    });

    test('Get nombre', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.getNombre()).toBe('Cancha 1');
    });

    test('Get precio', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.getPrecio()).toBe(100);
    });

    test('Get ubicacion', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.getUbicacion()).toBe('Ubicación 1');
    });

    test('Get descripcion', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.getDescripcion()).toBe('Descripción 1');
    });

    test('Set nombre', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        cancha.setNombre('Cancha 2');
        expect(cancha.getNombre()).toBe('Cancha 2');
    });

    test('Set precio', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        cancha.setPrecio(200);
        expect(cancha.getPrecio()).toBe(200);
    });

    test('Set ubicacion', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        cancha.setUbicacion('Ubicación 2');
        expect(cancha.getUbicacion()).toBe('Ubicación 2');
    });

    test('Set descripcion', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        cancha.setDescripcion('Descripción 2');
        expect(cancha.getDescripcion()).toBe('Descripción 2');
    });

    test('toString method', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.toString()).toBe('Cancha: Cancha 1 - Precio: 100 - Ubicación: Ubicación 1 - Descripción: Descripción 1');
    });

    test('Valid cancha', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', 'Descripción 1');
        expect(cancha.isValid()).toBe(true);
    });

    test('Invalid cancha name (empty)', () => {
        const cancha = new Canchas('', 100, 'Ubicación 1', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('El nombre de la cancha no puede ser vacío');
    });

    test('Invalid cancha price (undefined)', () => {
        const cancha = new Canchas('Cancha 1', undefined, 'Ubicación 1', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('El precio de la cancha debe ser un número positivo');
    });

    test('Invalid cancha price (null)', () => {
        const cancha = new Canchas('Cancha 1', null, 'Ubicación 1', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('El precio de la cancha debe ser un número positivo');
    });

    test('Invalid cancha price (NaN)', () => {
        const cancha = new Canchas('Cancha 1', 'NaN', 'Ubicación 1', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('El precio de la cancha debe ser un número positivo');
    });

    test('Invalid cancha price (negative)', () => {
        const cancha = new Canchas('Cancha 1', -100, 'Ubicación 1', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('El precio de la cancha debe ser un número positivo');
    });

    test('Invalid cancha location (empty)', () => {
        const cancha = new Canchas('Cancha 1', 100, '', 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('La ubicación de la cancha no puede ser vacía');
    });

    test('Invalid cancha location (undefined)', () => {
        const cancha = new Canchas('Cancha 1', 100, undefined, 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('La ubicación de la cancha no puede ser vacía');
    });

    test('Invalid cancha location (null)', () => {
        const cancha = new Canchas('Cancha 1', 100, null, 'Descripción 1');
        expect(() => cancha.isValid()).toThrow('La ubicación de la cancha no puede ser vacía');
    });

    test('Invalid cancha description (empty)', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', '');
        expect(() => cancha.isValid()).toThrow('La descripción de la cancha no puede ser vacía');
    });

    test('Invalid cancha description (undefined)', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', undefined);
        expect(() => cancha.isValid()).toThrow('La descripción de la cancha no puede ser vacía');
    });

    test('Invalid cancha description (null)', () => {
        const cancha = new Canchas('Cancha 1', 100, 'Ubicación 1', null);
        expect(() => cancha.isValid()).toThrow('La descripción de la cancha no puede ser vacía');
    });
});
