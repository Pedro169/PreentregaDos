const seguros = [];

const segurosDescripcion = [
  {
    codigo: 334,
    nombre: "Seguro de Incendio",
    valor: 7590,
    descripcion: "Protege hogar contra incendio, cubriendo 400 uf",
  },
  {
    codigo: 335,
    nombre: "Seguro de Accidentes Domésticos",
    valor: 15990,
    descripcion: "Protege accidentes domésticos, cubriendo 800 uf",
  },
  {
    codigo: 336,
    nombre: "Seguro de accidentes de tránsito",
    valor: 25990,
    descripcion: "Protege accidentes domésticos, cubriendo 1000 uf",
  },
];

const buscarSeguro = (codigo) => {
  let seguroSeleccionado = segurosDescripcion.find(
    (segurosDescripcion) => segurosDescripcion.codigo === codigo
  );
  return seguroSeleccionado;
};

const adquiereSeguro = () => {
  let codigo = prompt("Ingresa el código de seguro a consultar");
  let seguroFiltrado = buscarSeguro(parseInt(codigo));

  if (seguroFiltrado !== undefined) {
    seguros.push(seguroFiltrado);
    console.log(
      "Felicidades has adquirido un: " +
        seguroFiltrado.nombre +
        ", " +
        "Con un valor de $: " +
        seguroFiltrado.valor
    );
    const describe = new Descripcion(seguros);
    let descripcion = describe.obtenerDescripcion();
    console.log(descripcion);
  }
};
