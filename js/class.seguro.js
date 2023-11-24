class Descripcion {
  constructor(seguros) {
    this.seguros = { seguros };
  }

  ObtenerDescripcionProducto() {
    let descripcion = seguros.map((seguro) => {
      return {
        nombreSeguro: seguro.nombre,
        valorNeto: seguro.valor,
        Iva: parseInt(seguro.valor) * 0.19,
        descripcionSeguro: seguro.descripcion,
      };
    });
    console.table(descripcion);
  }
  // obtenerDescripcion() {
  //   if (this.seguros.length > 0) {
  //     return this.seguros.filter((segurosDescripcion) =>
  //       console.log(segurosDescripcion.descripcion)
  //     );
  //   }
  // }
}
