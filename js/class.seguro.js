class calculoIva {
  constructor(valor, iva) {
    this.valor = valor || 0;
    this.iva = iva || 0;
  }

  // recorre el nuevo arreglo y renombra las propiedades seleccionadas

  obtenerCalculo() {
    let calculoTotalIva = this.valor * this.iva + this.valor;
    return calculoTotalIva;
  }
}
