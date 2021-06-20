<template>
  <div class="info-plazo-fijo">
    <h2>Información del plazo fijo</h2>
    <datos-plazo-fijo></datos-plazo-fijo>
    <tabla-reinversion></tabla-reinversion>
  </div>
</template>

<script>
import DatosPlazoFijo from "@/components/DatosPlazoFijo.vue";
import TablaReinversion from "@/components/TablaReinversion.vue";

export default {
  components: {
    DatosPlazoFijo,
    TablaReinversion,
  },
};
</script>
