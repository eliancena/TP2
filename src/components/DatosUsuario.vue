<template>
  <form name="datos-usuario" @submit.prevent="calcular">
    <label>
      Apellido:
      <input type="text" id="apellido" v-model="apellido" required />
    </label>

    <label>
      Nombre:
      <input type="text" id="nombre" v-model="nombre" required />
    </label>

    <label>
      Monto a invertir:
      <input
        type="number"
        id="monto"
        v-model.number="monto"
        min="1000"
        required
      />
    </label>

    <label>
      Cantidad de días:
      <input
        type="number"
        id="cantidad"
        v-model.number="cantidadDias"
        min="30"
        required
      />
    </label>

    <label>
      ¿Desea reinvertir el capital?
      <select v-model.number="reinvertir" required>
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
      nombre: "",
      apellido: "",
      monto: MIN_MONTO,
      cantidadDias: MIN_DIAS,
      reinvertir: null,
      plazoFijo: [],
    };
  },

  methods: {
    calcular() {
      if (
        this.nombre.trim() === "" ||
        this.apellido.trim() === "" ||
        this.monto === "" ||
        this.cantidadDias === "" ||
        this.reinvertir === null
      ) {
        alert("!DATO FALTANTE!");
        return;
      }

      this.plazoFijo.push({
        nombre: this.nombre,
        apellido: this.apellido,
        monto: this.monto,
        cantidad: this.cantidad,
        reinvertir: this.reinvertir,
      });

      this.nombre = "";
      this.apellido = "";
      this.monto = MIN_MONTO;
      this.cantidadDias = MIN_DIAS;
      this.reinvertir = null;
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
  margin: 2px;
  display: inline-block;
  width: 100%;
  text-align: right;
}

button {
  width: fit-content;
  margin: auto;
  margin-top: 10px;
}
</style>
