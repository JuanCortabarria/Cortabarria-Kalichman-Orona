export class canchas {

    #nombre;
    #precio;
    #ubicacion;
    //faltan atributos???
  
    constructor(aNombre) {
      this.#nombre = aNombre;
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

    setNombre(aNombre) {
      this.#nombre = aNombre;
    }   

    setPrecio(aprecio) {
      this.#precio = aprecio;
    }

    setUbicacion(aUbicacion) {
        this.#ubicacion = aUbicacion;
    }

      
    toString() {
      return `País: ${this.#nombre} - capital: ${this.#precio}`;
    }
  
    isValid() {
      if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
        throw new Error('El nombre del país no puede ser vacío');
      }
      //completar con los atributos que faltan
      return true;
    }
    //validar que este bien escrito el nombre, nada de numeros.
    
    // validar que este escrito bien el mail.
  }