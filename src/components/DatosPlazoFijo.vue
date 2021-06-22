<template>
  <table class="datos-plazo-fijo">
    <tr>
      <th>Apellido</th>
      <td>{{ plazoFijo.apellido }}</td>
    </tr>
    <tr>
      <th>Nombre</th>
      <td>{{ plazoFijo.nombre }}</td>
    </tr>
    <tr>
      <th>Monto invertido</th>
      <td>${{ plazoFijo.monto }}</td>
    </tr>
    <tr>
      <th>Plazo de la inversión</th>
      <td>{{ plazoFijo.cantidadDias }} días</td>
    </tr>
    <tr>
      <th>Monto a recibir</th>
      <td>${{ plazoFijo.montoFinal }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DatosPlazoFijo",
  props: {
    plazo: {
      type: String,
      required: true,
    },
  },
  created() {
    this.plazoFijo = JSON.parse(this.plazo);
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
