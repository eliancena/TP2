<template>
  <form name="datos-usuario" @submit.prevent="calcular">
    <legend><h2>Ingrese sus datos</h2></legend>
    <label>
      Apellido:
      <input type="text" id="apellido" v-model.trim="plazo.apellido" required />
    </label>

    <label>
      Nombre:
      <input type="text" id="nombre" v-model.trim="plazo.nombre" required />
    </label>

    <label>
      Monto a invertir:
      <input
        type="number"
        id="monto"
        v-model.number="plazo.monto"
        min="1000"
        required
      />
    </label>

    <label>
      Cantidad de días:
      <input
        type="number"
        id="cantidad"
        v-model.number="plazo.cantidadDias"
        min="30"
        required
      />
    </label>

    <label>
      ¿Desea reinvertir el capital?
      <select v-model="plazo.reinvertir" required>
        <option :value="true">Si</option>
        <option :value="false">No</option>
      </select>
    </label>

    <button type="submit">Calcular</button>
  </form>
</template>

<script>
import plazoFijo from "@/services/store.js";

export default {
  created() {
    this.plazo = plazoFijo;
  },

  methods: {
    calcular() {
      plazoFijo.montoFinal = this.calcularMontoFinal(plazoFijo.monto);
      this.calcularReinversion(plazoFijo.monto);

      this.$router.push({ name: "InfoPlazoFijo" });
    },

    calcularMontoFinal(montoInicial) {
      const montoFinal =
        montoInicial +
        montoInicial * (plazoFijo.cantidadDias / 360) * (this.porcentaje / 100);

      return Math.round(montoFinal * 100) / 100;
    },

    calcularReinversion(montoInicial) {
      for (let i in plazoFijo.montosReinversion) {
        plazoFijo.montosReinversion[i].montoInicial = montoInicial;
        plazoFijo.montosReinversion[i].montoFinal =
          this.calcularMontoFinal(montoInicial);
        montoInicial = plazoFijo.montosReinversion[i].montoFinal;
      }
    },
  },

  computed: {
    porcentaje() {
      if (plazoFijo.cantidadDias >= 360) return 65;
      if (plazoFijo.cantidadDias >= 121) return 50;
      if (plazoFijo.cantidadDias >= 61) return 45;
      return 40;
    },
  },
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
