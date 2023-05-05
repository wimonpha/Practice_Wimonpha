<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/vmodel">v-model</router-link> |
    <router-link to="/von">v-on</router-link> |
    <router-link to="/vbind">v-bind</router-link> |
    <router-link to="/prop">v-prop</router-link>
    <br /><br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: red;
}
</style>
