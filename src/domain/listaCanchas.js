export class ListaCanchas {
  #canchas;

  constructor() {
    this.#canchas = [];
  }

  add(cancha) {
    if (this.#canchas.some(c => c.getNombre() === cancha.getNombre())) {
      throw new Error(`No se pudo agregar. ${cancha.getNombre()} ya está en la lista.`);
    }
    if (cancha.isValid()) {
      this.#canchas.push(cancha);
    } else {
      throw new Error(`No se pudo agregar. La cancha ${cancha.getNombre()} no es válida.`);
    }
  }

  getCanchas() {
    return this.#canchas;
  }
}
