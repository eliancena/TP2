<template>
  <form name="datos-usuario" @submit.prevent="calcular">
    <legend><h2>Ingrese sus datos</h2></legend>
    <label>
      Apellido:
      <input
        type="text"
        id="apellido"
        v-model.trim="plazoFijo.apellido"
        required
      />
    </label>

    <label>
      Nombre:
      <input type="text" id="nombre" v-model.trim="plazoFijo.nombre" required />
    </label>

    <label>
      Monto a invertir:
      <input
        type="number"
        id="monto"
        v-model.number="plazoFijo.monto"
        min="1000"
        required
      />
    </label>

    <label>
      Cantidad de días:
      <input
        type="number"
        id="cantidad"
        v-model.number="plazoFijo.cantidadDias"
        min="30"
        required
      />
    </label>

    <label>
      ¿Desea reinvertir el capital?
      <select v-model.number="plazoFijo.reinvertir" required>
        <option value="1">Si</option>
        <option value="0">No</option>
      </select>
    </label>

    <button type="submit">Calcular</button>
  </form>
</template>

<script>
const MIN_MONTO = 1000,
  MIN_DIAS = 30;

export default {
  data() {
    return {
      plazoFijo: {
        nombre: "",
        apellido: "",
        monto: MIN_MONTO,
        cantidadDias: MIN_DIAS,
        reinvertir: null,
      },
    };
  },

  methods: {
    calcular() {
      //this.plazoFijo.montoFinal = this.calcularMontoFinal(this.plazoFijo.monto);
      //this.calcularReinversion(this.plazoFijo.monto);

      this.$router.push({ name: "InfoPlazoFijo", query: this.plazoFijo });
    },

    /*calcularMontoFinal(montoInicial) {
      const montoFinal =
        montoInicial +
        montoInicial * (this.plazoFijo.cantidadDias / 360) * (this.porcentaje / 100);

      return Math.round(montoFinal * 100) / 100;
    },

    calcularReinversion(montoInicial) {
      for (let i in this.plazoFijo.montosReinversion) {
        this.plazoFijo.montosReinversion[i].montoInicial = montoInicial;
        this.plazoFijo.montosReinversion[i].montoFinal =
          this.calcularMontoFinal(montoInicial);
        montoInicial = this.plazoFijo.montosReinversion[i].montoFinal;
      }
    },*/
  },

  /*computed: {
    porcentaje() {
      if (this.plazoFijo.cantidadDias >= 360) return 65;
      if (this.plazoFijo.cantidadDias >= 121) return 50;
      if (this.plazoFijo.cantidadDias >= 61) return 45;
      return 40;
    },
  },*/
};
</script>

<style scoped>
form {
  width: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

label {
  padding: 5px;
  display: inline-block;
  width: 100%;
  text-align: right;
  font-size: large;
}
</style>
