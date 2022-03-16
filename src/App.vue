<template>
  <NavTopBar class="NavTopBar" />
  <NavSideBar class="NavSideBar" />
  <div class="component-container"></div>
</template>

<script>
import NavSideBar from "./components/NavSideBar.vue";
import NavTopBar from "./components/NavTopBar.vue";

export default {
  name: "App",
  components: {
    NavSideBar,
    NavTopBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

* {
  font-family: "Source Code Pro", monospace;
}

html {
  margin: 0;
  padding: 0;
  background-color: #212633;
  color: #ffffff;
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

.NavSideBar {
  position: fixed;
  top: 7vh;
  width: 14%;
  height: 87%;
  margin: 0 0 0 20px;
}

.NavTopBar {
  position: fixed;
  width: 100%;
  height: 7%;
}

.component-container {
  position: absolute;
  top: 7vh;
  left: 16.5%;
  width: 82%;
  height: 87%;

  background-color: #202431;
  border-radius: 20px;
}
</style>
