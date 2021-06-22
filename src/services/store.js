const MIN_MONTO = 1000,
  MIN_DIAS = 30;

const plazoFijo = {
  nombre: "",
  apellido: "",
  monto: MIN_MONTO,
  cantidadDias: MIN_DIAS,
  reinvertir: null,
  montoFinal: 0,
  montosReinversion: [
    { periodo: 1, montoInicial: 0, montoFinal: 0 },
    { periodo: 2, montoInicial: 0, montoFinal: 0 },
    { periodo: 3, montoInicial: 0, montoFinal: 0 },
    { periodo: 4, montoInicial: 0, montoFinal: 0 },
  ],
};

export default plazoFijo;
