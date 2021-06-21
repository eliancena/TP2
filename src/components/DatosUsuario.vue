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
      montoFinal: 0,
      montoReinvertirFinal: [],
      montoReinvertirInicial: [],
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

      let porcentaje;

      if (this.cantidadDias >= 30 && this.cantidadDias <= 60) {
        porcentaje = 40;
      } else if (this.cantidadDias >= 61 && this.cantidadDias <= 120) {
        porcentaje = 45;
      } else if (this.cantidadDias >= 121 && this.cantidadDias <= 360) {
        porcentaje = 50;
      } else {
        porcentaje = 65;
      }

      this.calcularMontoFinal(porcentaje);
      this.calcularReinvertir(porcentaje);

      this.nombre = "";
      this.apellido = "";
      this.monto = MIN_MONTO;
      this.cantidadDias = MIN_DIAS;
      this.reinvertir = null;
    },

    calcularMontoFinal(porcentaje) {
      this.montoFinal =
        this.monto +
        this.monto * (this.cantidadDias / 360) * (porcentaje / 100);
      this.montoReinvertirInicial[0] = this.monto;
    },

    calcularReinvertir(porcentaje) {
      for (let i = 0; i < 4; i++) {
        this.montoReinvertirFinal[i] +=
          this.montoReinvertirInicial[i] *
          (this.cantidadDias / 360) *
          (porcentaje / 100);

        if (this.montoReinvertirInicial.length < 4) {
          this.montoReinvertirInicial[i + 1] = this.montoReinvertirFinal[i];
        }
      }
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

button {
  width: fit-content;
  margin: auto;
  margin-top: 10px;
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

button:hover {
  background-color: #5cbf2a;
}

button:active {
  position: relative;
  top: 1px;
}
</style>
