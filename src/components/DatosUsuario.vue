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
      this.$router.push({ name: "InfoPlazoFijo", query: this.plazoFijo });
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
