const seguros = [];

// Arreglo con seguros

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
  {
    codigo: 337,
    nombre: "Seguro contra Robos",
    valor: 15990,
    descripcion:
      "Devuelve las especies perdidas en caso de robo, cubriendo 1000 uf",
  },
  {
    codigo: 338,
    nombre: "Seguro de Fallecimiento",
    valor: 22990,
    descripcion:
      "Entrega dinero para gastos funerarios y de traslados, cubriendo 5000 uf",
  },
  {
    codigo: 339,
    nombre: "Seguro para vehiculos",
    valor: 63990,
    descripcion:
      "Protege tu vehiculos contra robos, incendio, accidente de tránsito, cubriendo 1000 uf",
  },
];

// funcion para busqueda de seguro

const buscarSeguro = (codigo) => {
  let seguroSeleccionado = segurosDescripcion.find(
    (segurosDescripcion) => segurosDescripcion.codigo === codigo
  );
  return seguroSeleccionado;
};

// funcion para insertar seguro filtrado en nuevo arreglo y retornar eleccion

const adquiereSeguro = () => {
  let codigo = prompt("Ingresa el código de seguro a consultar");
  let seguroFiltrado = buscarSeguro(parseInt(codigo));

  if (seguroFiltrado !== undefined) {
    seguros.push(seguroFiltrado);
    console.log(
      "Felicidades has adquirido un: " +
        seguroFiltrado.nombre +
        ", a continuación puedes ver una tabla con la descripción del seguro del cuál serás beneficiario: "
    );

    // comunicacion con clase seguro

    const describe = new Descripcion(seguros);
    let descripcion = describe.ObtenerDescripcionProducto();
  } else {
    console.warn("El código ingresado no es válido");
    responde = confirm("Te gustaría volver a intetarlo");
    if (responde === true) {
      adquiereSeguro();
    }
  }
};
