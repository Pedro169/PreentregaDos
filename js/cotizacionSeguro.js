const nombreSeguro = document.querySelector("span.nombreSeguro");
const valorNetoSeguro = document.querySelector("span.valorSeguro");
const coberturaSeguro = document.querySelector("span.descripcionSeguro");
const totalIva = document.querySelector("span.valorTotalSeguro");
const insertaNombre = document.querySelector("span.nombre");
const insertaNumeroTelefonico = document.querySelector("span.telefono");

const recuperarDatosSeguro = () => {
  const datosSeguroLs = JSON.parse(localStorage.getItem("DatosSeguro"));

  nombreSeguro.textContent = datosSeguroLs.nombre;
  valorNetoSeguro.textContent = " $ " + datosSeguroLs.valor;
  coberturaSeguro.textContent = datosSeguroLs.descripcion;
  totalIva.textContent = " $ " + datosSeguroLs.TotalIva;
  insertaNombre.textContent = datosSeguroLs.nombre;
  insertaNumeroTelefonico.textContent = datosSeguroLs.celular;
};

document
  .getElementById("mostrarMensaje")
  .addEventListener("click", function () {
    document.getElementById("mensaje").classList.remove("oculto");
  });
document.getElementById("cerrarMensaje").addEventListener("click", function () {
  document.getElementById("mensaje").classList.add("oculto");
  location.href = "index.html";
});

recuperarDatosSeguro();
