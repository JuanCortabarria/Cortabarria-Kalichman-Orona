import { Canchas } from './canchas';

export class ListaCanchas {
    #canchas = [];

    add(cancha) {
        if (!(cancha instanceof Canchas)) {
            throw new Error('Solo se pueden agregar objetos de tipo Canchas');
        }
        if (!cancha.isValid()) {
            throw new Error('Cancha inválida');
        }
        if (this.#canchas.some(c => c.getNombre() === cancha.getNombre())) {
            throw new Error(`No se pudo agregar. Cancha ${cancha.getNombre()} ya está en la lista.`);
        }
        this.#canchas.push(cancha);
    }

    getCanchas() {
        return this.#canchas;
    }
}
