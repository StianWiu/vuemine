<template>
  <NavBar class="NavBar" />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  background-color: #212633;
  color: #ffffff;
}

.NavBar {
  /* Force navbar to the left of the screen */
  position: fixed;
  top: 0;
  left: 0;
  width: 30vh;
  height: 100%;
}
</style>
