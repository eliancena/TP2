<template>
  <div class="info-plazo-fijo">
    <h2>Información del plazo fijo</h2>
    <datos-plazo-fijo :plazo="$route.query" />
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

  data() {
    return {
      reinvertir: parseInt(this.$route.query.reinvertir),
      montoInicial: parseFloat(this.$route.query.monto),
      cantidadDias: parseInt(this.$route.query.cantidadDias),
    };
  },
};
</script>
