<script>
export default {
  data() {
    return {
      game: {},
    };
  },
  created() {},
  methods: {},
};
</script>

<template>
  <nav>
    <div class="nav_title">
      <img class="vue_icon" src="../assets/logo.png" />
      <h1>VueMine</h1>
    </div>
    <div class="nav_links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style>
nav {
  background-color: #2b3141;
  color: #ffffff;
}

ul {
  list-style: none;
  padding: 0;
}

.nav_title {
  width: 100%;
  box-shadow: -3px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 0 10px 0;
  margin: 0 0 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.vue_icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.nav_links {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav_links > router-link {
  display: flex;
  width: 90%;
  padding: 17px 0px 17px 20px;
  text-decoration: none;
  color: #97a1be;

  font-size: 20px;
}

.nav_links > router-link:hover {
  background-color: #32394b;
  cursor: pointer;
}
</style>
