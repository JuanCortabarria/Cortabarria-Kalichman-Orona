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
      return `País: ${this.#nombre} - capital: ${this.#mail}`;
    }
  
    isValid() {
      if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
        throw new Error('El nombre del país no puede ser vacío');
      }
      if (this.#mail === undefined || this.#mail === null || this.#mail === '') {
        throw new Error('El mail del cliente no puede ser vacío');
      }
      return true;
    }
    //validar que este bien escrito el nombre, nada de numeros.
    
    // validar que este escrito bien el mail.
  }