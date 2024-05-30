export class clientes {

  #nombre;
  #mail;

  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setCapital(aMail) {
    this.#mail = aMail;
  }

  toString() {
    return `Cliente: ${this.#nombre} - Mail: ${this.#mail}`;
  }

  isValid() {
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre del cliente no puede ser vacío');
    }
    if (this.#mail === undefined || this.#mail === null || this.#mail === '') {
      throw new Error('El mail del cliente no puede ser vacío');
    }

    // Validar que el nombre no contenga números
    const nombreSinNumeros = /^[a-zA-Z\s]+$/;
    if (!nombreSinNumeros.test(this.#nombre)) {
      throw new Error('El nombre del cliente no puede contener números');
    }

    // Validar que el mail esté bien formateado
    const mailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailFormato.test(this.#mail)) {
      throw new Error('El mail del cliente no está bien formateado');
    }

    return true;
  }
}
