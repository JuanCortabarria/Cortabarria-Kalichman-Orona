export class Canchas {
  #nombre;
  #precio;
  #ubicacion;
  #descripcion;

  constructor(aNombre, aPrecio, aUbicacion, aDescripcion) {
    this.#nombre = aNombre;
    this.#precio = aPrecio;
    this.#ubicacion = aUbicacion;
    this.#descripcion = aDescripcion;
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

  setNombre(aNombre) {
    this.#nombre = aNombre;
  }

  setPrecio(aPrecio) {
    this.#precio = aPrecio;
  }

  setUbicacion(aUbicacion) {
    this.#ubicacion = aUbicacion;
  }

  setDescripcion(aDescripcion) {
    this.#descripcion = aDescripcion;
  }

  toString() {
    return `Cancha: ${this.#nombre} - Precio: ${this.#precio} - Ubicación: ${this.#ubicacion} - Descripción: ${this.#descripcion}`;
  }

  isValid() {
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre de la cancha no puede ser vacío');
    }
    if (!/^[a-zA-Z\s]+$/.test(this.#nombre)) {
      throw new Error('El nombre de la cancha solo puede contener letras y espacios');
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
}
