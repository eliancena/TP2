<template>
  <div class="menu">
    <datos-usuario></datos-usuario>
  </div>
</template>

<script>
import DatosUsuario from "@/components/DatosUsuario.vue";

export default {
  name: "Menu",
  components: {
    DatosUsuario,
  },
};
</script>

<style>
.menu {
  width: 100%;
}
</style>
