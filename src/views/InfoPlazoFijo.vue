<template>
  <div class="info-plazo-fijo" v-if="plazo">
    <h2>Información del plazo fijo</h2>
    <datos-plazo-fijo :plazo="plazo"></datos-plazo-fijo>
    <tabla-reinversion
      v-if="reinvertir"
      :montos-reinversion="montosReinversion"
    ></tabla-reinversion>
  </div>
  <router-link :to="{ name: 'Home' }">
    <button>Cerrar</button>
  </router-link>
</template>

<script>
import DatosPlazoFijo from "@/components/DatosPlazoFijo.vue";
import TablaReinversion from "@/components/TablaReinversion.vue";

export default {
  components: {
    DatosPlazoFijo,
    TablaReinversion,
  },

  props: {
    plazo: {
      type: String,
      required: true,
    },
  },

  created() {
    this.reinvertir = JSON.parse(this.plazo).reinvertir;
    this.montosReinversion = JSON.parse(this.plazo).montosReinversion;
  },
};
</script>
