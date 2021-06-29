<template>
  <div class="info-plazo-fijo">
    <h2>Información del plazo fijo</h2>
    <datos-plazo-fijo :plazo="plazo" />
    <tabla-reinversion
      v-if="reinvertir"
      :monto-inicial="montoInicial"
      :cantidad-dias="cantidadDias"
    />
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

  computed: {
    reinvertir() {
      return parseInt(this.$route.query.reinvertir);
    },
    montoInicial() {
      return parseFloat(this.$route.query.monto);
    },
    cantidadDias() {
      return parseInt(this.$route.query.cantidadDias);
    },
    plazo() {
      return this.$route.query.plazo;
    },
  },
};
</script>
