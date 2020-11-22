<template>
  <header v-if="$route.name !== 'Login'">
    <nav>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img class="avatar" @click="showDropdown = !showDropdown"  v-bind:src="$store.state.userInfo.avatar">
        <div v-if="showDropdown" class="drop-down-container">
          <span id="user-name">{{ fullName }}</span>
          <span id="user-email">{{ $store.state.userInfo.email }}</span>
          <span class="separator"></span>
          <span>
            <router-link to="/browse">Browse</router-link>
          </span>
          <span class="separator"></span>
          <span>
            <router-link to="/login">Log out</router-link>
          </span>
        </div>
      </div>
     </nav>
  </header>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  mounted() {
    this.$store.dispatch('getUserInfo')
  },
  computed: {
    fullName() {
      return this.$store.state.userInfo.firstname + ' ' + this.$store.state.userInfo.lastname
    }
  }
})
export default class App extends Vue {
  showDropdown = false
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0277bd;
  height: 100%;
 // text-align: center;
  color: #2c3e50;
}

* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}

.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: #ffffff;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
}
.drop-down-container span{
    display: block;
}
.drop-down-container span.separator{
    border-bottom: 1px solid #d7d7d7;
    margin: 10px -10px;
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
</style>
