export class listaCanchas {

    #canchas;
  
    constructor() {
      this.#canchas = [];
    }
  
    add(c) {
      let canchaInList = this.#canchas.some(m => m.getNombre() == c.getNombre());
      if (!canchaInList && canchas.isValid()) {
        this.#canchas.push(canchas);
      } else {
        throw new Error(`No se pudo agregar. ${canchas.getNombre()} ya está en la lista.`);
      }
    }
  
    getcanchas() {
      return this.#canchas;
    }
  }