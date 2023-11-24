class Descripcion {
  constructor(seguros) {
    this.seguros = { seguros };
  }

  // recorre el nuevo arreglo y renombra las propiedades seleccionadas

  ObtenerDescripcionProducto() {
    let descripcion = seguros.map((seguro) => {
      return {
        nombreSeguro: seguro.nombre,
        descripcionSeguro: seguro.descripcion,
        valorNeto: seguro.valor,
        Iva: parseInt(seguro.valor) * 0.19,
        valorTotal: parseInt(seguro.valor) + parseInt(seguro.valor) * 0.19,
      };
    });
    console.table(descripcion);
  }
}
