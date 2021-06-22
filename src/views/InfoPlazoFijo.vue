<template>
  <div class="info-plazo-fijo">
    <h2>Información del plazo fijo</h2>
    <datos-plazo-fijo></datos-plazo-fijo>
    <tabla-reinversion v-if="reinvertir" :montos="montos"></tabla-reinversion>
  </div>
  <router-link :to="{ name: 'Home' }">
    <button>Cerrar</button>
  </router-link>
</template>

<script>
import DatosPlazoFijo from "@/components/DatosPlazoFijo.vue";
import TablaReinversion from "@/components/TablaReinversion.vue";
import plazoFijo from "@/services/store.js";

export default {
  components: {
    DatosPlazoFijo,
    TablaReinversion,
  },

  created() {
    this.reinvertir = plazoFijo.reinvertir;
    this.montos = plazoFijo.montosReinversion;
  },
};
</script>
