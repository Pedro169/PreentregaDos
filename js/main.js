const seguros = [];
let iva = 0.19;

//enlace DOM

const numeroTelefono = document.querySelector("input#telefono");
const seguroSeleccion = document.querySelector("select");
const btnCotizar = document.querySelector("button.boton");

// funcion para busqueda de seguro

const buscarSeguro = (seguro) => {
  let seguroSeleccionado = segurosDescripcion.find(
    (segurosDescripcion) => segurosDescripcion.nombre === seguro
  );
  return seguroSeleccionado;
};

// funcion filtra seguro

const adquiereSeguro = () => {
  let seguroFiltrado = buscarSeguro(seguroSeleccion.value);

  if (seguroFiltrado !== undefined) {
    seguros.push(seguroFiltrado);
    calculoSeguro(seguroFiltrado);
  }
};
//guarda datos en ls
const guardarDatosLS = (nombre, valor, descripcion, totalIva, telefono) => {
  let datosSeguro = {
    nombre: nombre,
    valor: valor,
    descripcion: descripcion,
    TotalIva: totalIva,
    celular: telefono,
  };
  localStorage.setItem("DatosSeguro", JSON.stringify(datosSeguro));
};

//calcula total a pagar por el seguro

const calculoSeguro = (seguro) => {
  let nombre = seguro.nombre;
  let valor = seguro.valor;
  let descripcion = seguro.descripcion;
  let ivaChile = iva;
  let telefono = numeroTelefono.value;

  const calcular = new calculoIva(valor, ivaChile);

  let totalCalcularIva = calcular.obtenerCalculo();

  //localStorage

  guardarDatosLS(nombre, valor, descripcion, totalCalcularIva, telefono);
  //redireccion de usuario pagina seguroDescripcion
  location.href = "seguroDescripcion.html";
};

// EVENTO
btnCotizar.addEventListener("click", () => adquiereSeguro());
