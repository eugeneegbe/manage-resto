<template>
  <img class="logo" src="./assets/yarafdmall.jpeg"/>
  <SignUp />

  <div class="register">
      <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Enter password" />
      <button>Sign Up</button>
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 0.7px solid #683c2c;
}

.register button {
  border: none;
  color: white;
  padding: 20px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  background-color: #683c2c;
  cursor: pointer;
}
</style>
