<script>
export default {
  data() {
    return {
      data: {
        serverName: "",
      },
    };
  },
  created() {},
  methods: {
    inputUpdate(serverName) {
      this.data.serverName = serverName;
    },
    inputButton() {
      console.log(this.data.serverName);
      axios({
        method: "post",
        url: `http://localhost:3330/api/create/server`,
        data: {
          ["serverName"]: this.data.serverName,
          ["timeCreated"]: new Date(),
          ["serverId"]: this.generateRandomId(),
        },
      }).then(async (result) => {
        // Make vue rerender
        if (result.data === "true") {
          window.location.reload();
        } else {
          console.log(result.data);
        }
      });
    },
    generateRandomId() {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    },
  },
};
import axios from "axios";
</script>

<template>
  <div class="main">
    <h2>Create your first server</h2>
    <input
      @input="(event) => this.inputUpdate(event.target.value)"
      placeholder="Server Name"
      maxlength="25"
    />
    <button @click="this.inputButton()">Create server</button>
  </div>
</template>

<style scoped>
template {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

input {
  height: 25px;
  width: 15em;
  border-radius: 10px;
  padding: 10px;

  border: 7px solid #3c465e;
  background-color: #2f3749;
  color: #51b883;

  font-size: 1.2em;
  text-align: center;
}

button {
  width: 15em;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0 0 0;

  border: 7px solid #3c465e;
  background-color: #2f3749;
  color: #51b883;

  font-size: 1.2em;
  text-align: center;
}

button:hover {
  background-color: #51b883;
  color: #3c465e;
  cursor: pointer;
}
</style>
