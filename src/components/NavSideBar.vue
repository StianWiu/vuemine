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
    <div>
      <a class="nav_title">
        <img src="../assets/logo.png" />
        <h2>VueMine</h2>
      </a>
      <div class="center_line">
        <div class="title_line"></div>
      </div>
    </div>
    <div class="nav_links">
      <a>
        <fa
          icon="house"
          style="padding-right: 20px; width: 30px; height: 20px"
        />
        Home
      </a>
      <a>
        <fa
          icon="question"
          style="padding-right: 20px; width: 30px; height: 20px"
        />
        About
      </a>
      <a>
        <fa
          icon="address-card"
          style="padding-right: 20px; width: 30px; height: 20px"
        />
        Contact
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #2b3141;
  color: #ffffff;
  border-radius: 20px;
}

h2 {
  font-size: 1.5em;
  margin: 0;
  padding: 0;
}

img {
  width: 40px;
  height: 40px;
}

.nav_title {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}

.center_line {
  display: flex;
  justify-content: center;
}

.title_line {
  width: 80%;
  height: 2px;
  background-color: #495470;
}

.vue_icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.nav_links {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav_links > a {
  display: flex;
  width: 90%;
  padding: 17px 0px 17px 20px;
  text-decoration: none;
  color: #97a1be;

  font-size: 20px;
}

.nav_links > a:hover {
  background-color: #32394b;
  cursor: pointer;
}
</style>
