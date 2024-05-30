export class reservas {

  #cancha;
  #hora;
  #fecha;
  #nombreCliente;
  #mailCliente;

  constructor(aCancha) {
    this.#cancha = aCancha;
  }

  getCancha() {
    return this.#cancha;
  }

  getHora() {
    return this.#hora;
  }

  getFecha() {
    return this.#fecha;
  }

  getNombreCliente() {
    return this.#nombreCliente;
  }

  getMailCliente() {
    return this.#mailCliente;
  }

  setCancha(aCancha) {
    this.#cancha = aCancha;
  }   

  setHora(aHora) {
    this.#hora = aHora;
  }

  setFecha(aFecha) {
    this.#fecha = aFecha;
  }

  setNombreCliente(aNombreCliente) {
    this.#nombreCliente = aNombreCliente;
  }

  setMailCliente(aMailCliente) {
    this.#mailCliente = aMailCliente;
  }

  toString() {
    return `Reserva: Cancha: ${this.#cancha}, Fecha: ${this.#fecha}, Hora: ${this.#hora}, Cliente: ${this.#nombreCliente}, Email: ${this.#mailCliente}`;
  }

  isValid() {
    if (this.#cancha === undefined || this.#cancha === null || this.#cancha === '') {
      throw new Error('La cancha no puede ser vacía');
    }
    if (this.#fecha === undefined || this.#fecha === null || this.#fecha === '') {
      throw new Error('Ingrese una fecha');
    }
    if (this.#hora === undefined || this.#hora === null || this.#hora === '') {
      throw new Error('Ingrese una hora');
    }
    if (this.#nombreCliente === undefined || this.#nombreCliente === null || this.#nombreCliente === '') {
      throw new Error('El nombre del cliente no puede ser vacío');
    }
    if (this.#mailCliente === undefined || this.#mailCliente === null || this.#mailCliente === '') {
      throw new Error('El mail del cliente no puede ser vacío');
    }

    // Validar que el nombre del cliente no contenga números
    const nombreSinNumeros = /^[a-zA-Z\s]+$/;
    if (!nombreSinNumeros.test(this.#nombreCliente)) {
      throw new Error('El nombre del cliente no puede contener números');
    }

    // Validar que el mail esté bien formateado
    const mailFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailFormato.test(this.#mailCliente)) {
      throw new Error('El mail del cliente no está bien formateado');
    }

    return true;
  }
}
