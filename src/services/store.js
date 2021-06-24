const store = {
  calcularMontoFinal(montoInicial, cantidadDias) {
    let porcentaje;
    if (cantidadDias >= 360) porcentaje = 65;
    else if (cantidadDias >= 121) porcentaje = 50;
    else if (cantidadDias >= 61) porcentaje = 45;
    else porcentaje = 40;

    return (
      montoInicial + montoInicial * (cantidadDias / 360) * (porcentaje / 100)
    );
  },
};

export default store;
