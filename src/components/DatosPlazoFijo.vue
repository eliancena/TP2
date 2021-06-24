<template>
  <table class="datos-plazo-fijo">
    <tr>
      <th>Apellido</th>
      <td>{{ $route.query.apellido }}</td>
    </tr>
    <tr>
      <th>Nombre</th>
      <td>{{ $route.query.nombre }}</td>
    </tr>
    <tr>
      <th>Monto invertido</th>
      <td>${{ monto.toFixed(2) }}</td>
    </tr>
    <tr>
      <th>Plazo de la inversión</th>
      <td>{{ cantidadDias }} días</td>
    </tr>
    <tr>
      <th>Monto a recibir</th>
      <td>${{ montoFinal.toFixed(2) }}</td>
    </tr>
  </table>
</template>

<script>
import store from "@/services/store.js";

export default {
  name: "DatosPlazoFijo",
  data() {
    return {
      monto: parseFloat(this.$route.query.monto),
      cantidadDias: parseInt(this.$route.query.cantidadDias),
    };
  },

  computed: {
    montoFinal() {
      return store.calcularMontoFinal(this.monto, this.cantidadDias);
    },
  },
};
</script>

<style scoped>
table.datos-plazo-fijo {
  width: fit-content;
  text-align: left;
  border-collapse: collapse;
  margin: auto;
}
table.datos-plazo-fijo td,
table.datos-plazo-fijo th {
  border: 1px solid white;
  padding: 3px 4px;
}
table.datos-plazo-fijo tbody td {
  font-size: 13px;
}
table.datos-plazo-fijo td:nth-child(even) {
  background: #ebebeb;
}
table.datos-plazo-fijo tfoot td {
  font-size: 14px;
}
</style>
