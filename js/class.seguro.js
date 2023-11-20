class Descripcion {
  constructor(detalleSeguro) {
    this.seguros = { detalleSeguro };
  }
  obtenerDescripcion() {
    if (this.seguros.length > 0) {
      return this.seguros.filter((segurosDescripcion) =>
        console.log(segurosDescripcion.descripcion)
      );
    }
  }
}
