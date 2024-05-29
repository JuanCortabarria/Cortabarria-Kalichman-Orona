export class listaReservas {

    #reservas;
  
    constructor() {
      this.#reservas = [];
    }
  
    add(c) {
      let reservasInList = this.#reservas.some(m => m.getNombre() == c.getNombre());
      if (!reservasInList && reservas.isValid()) {
        this.#reservas.push(reservas);
      } else {
        throw new Error(`No se pudo agregar. ${reservas.getNombre()} ya está en la lista.`);
      }
    }
  
    getReservas() {
      return this.#reservas;
    }
  }