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
    <p>Dashboard</p>
    <div class="nav_icons">
      <a href="/">
        <fa class="fa-lg" icon="user" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

p {
  margin: 0 0 0 25px;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.nav_icons {
  margin: 0 50px 0 0;
}

.nav_icons > fa {
  width: 20px;
}
</style>
