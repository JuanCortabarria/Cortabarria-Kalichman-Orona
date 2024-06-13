import { reservas } from './reservas';

export class listaReservas {
    #reservas = [];

    add(reserva) {
        if (!(reserva instanceof reservas)) {
            throw new Error('Solo se pueden agregar objetos de tipo reservas');
        }
        if (!reserva.isValid()) {
            throw new Error('Reserva inválida');
        }
        if (this.#reservas.some(r => r.getCancha() === reserva.getCancha() && r.getFecha() === reserva.getFecha() && r.getHora() === reserva.getHora())) {
            throw new Error(`No se pudo agregar. Reserva para la cancha ${reserva.getCancha()} ya está en la lista.`);
        }
        this.#reservas.push(reserva);
    }

    getReservas() {
        return this.#reservas;
    }
}
