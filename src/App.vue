<template>
  <router-view />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  padding: 0;
  margin: 0;
}

form {
  margin-top: 50px;
    width: 500px;
    margin: 0 auto;
    text-align: left;
}
.form-group{
  margin-bottom: 25px;
}
.register input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 0.7px solid #683c2c;
}

.register button, .add button {
    border: none;
    color: white;
    padding: 20px;
    width: 150px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    background-color: #795547;
    cursor: pointer;
}
</style>
