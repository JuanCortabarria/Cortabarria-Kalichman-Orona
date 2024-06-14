export class Canchas {
    #nombre;
    #precio;
    #ubicacion;
    #descripcion;

    constructor(nombre, precio, ubicacion, descripcion) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#ubicacion = ubicacion;
        this.#descripcion = descripcion;
    }

    getNombre() {
        return this.#nombre;
    }

    getPrecio() {
        return this.#precio;
    }

    getUbicacion() {
        return this.#ubicacion;
    }

    getDescripcion() {
        return this.#descripcion;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setPrecio(precio) {
        this.#precio = precio;
    }

    setUbicacion(ubicacion) {
        this.#ubicacion = ubicacion;
    }

    setDescripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    isValid() {
        if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
            throw new Error('El nombre de la cancha no puede ser vacío');
        }
        if (this.#precio === undefined || this.#precio === null || isNaN(this.#precio) || this.#precio <= 0) {
            throw new Error('El precio de la cancha debe ser un número positivo');
        }
        if (this.#ubicacion === undefined || this.#ubicacion === null || this.#ubicacion === '') {
            throw new Error('La ubicación de la cancha no puede ser vacía');
        }
        if (this.#descripcion === undefined || this.#descripcion === null || this.#descripcion === '') {
            throw new Error('La descripción de la cancha no puede ser vacía');
        }
        return true;
    }

    toString() {
        return `Cancha: ${this.#nombre} - Precio: ${this.#precio} - Ubicación: ${this.#ubicacion} - Descripción: ${this.#descripcion}`;
    }
}

