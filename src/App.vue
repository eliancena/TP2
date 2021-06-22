<template>
  <h1>BANCO</h1>
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
