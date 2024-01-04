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
//select DOM



const cargarSeguro = () => {
  const selectSeguros = document.querySelector("#SelectSeguro");
  if (segurosDescripcion.length > 0) {
    segurosDescripcion.forEach((seguro) => {
      selectSeguros.innerHTML += `<option>${seguro.nombre}</option>`;
    });
  }else{
    
  }  
};
cargarSeguro();
