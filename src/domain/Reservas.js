export class reservas {

    #cancha;
    #hora;
    #dia;
    //faltan atributos???
  
    constructor(aCancha) {
      this.#cancha = aCancha;
    }
  
    getCancha() {
      return this.#cancha;
    }
  
    getHora() {
      return this.#hora;
    }

    getDia() {
        return this.#dia;
    }

    setCancha(aCancha) {
      this.#cancha = aCancha;
    }   

    setHora(aHora) {
      this.#hora = aHora;
    }

    setDia(aDia) {
        this.#dia = aDia;
    }

      
    toString() {
      return `País: ${this.#cancha} - capital: ${this.#hora}`;
    }
  
    isValid() {
      if (this.#cancha === undefined || this.#cancha === null || this.#cancha === '') {
        throw new Error('El cancha del país no puede ser vacío');
      }
      if (this.#dia === undefined || this.#dia === null || this.#dia === ''){
        throw new Error('Ingrese un dia valido');
      }
      if (this.#hora === undefined || this.#hora === null || this.#hora === ''){
        throw new Error('Ingrese un dia valida');
      }
      return true;
    }
}