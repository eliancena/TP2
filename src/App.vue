<template>
  <h1>BANCO</h1>
  <nav id="nav">
    <router-link to="/">Datos del usuario</router-link> |
    <router-link :to="{ name: 'InfoPlazoFijo' }">
      Información del plazo fijo
    </router-link>
  </nav>
  <router-view />
  <footer>
    <p>
      Laboratorio de Computación III - TP2 - Cena, Elian; Pietnechuk, Rodrigo.
    </p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: absolute;
  bottom: 0;
  left: 5px;
  font-size: small;
}
</style>
