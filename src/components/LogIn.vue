<template>
    <h1> Login to YARA</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="logIn">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'LogIn',
        data(){
            return{
                name: '',
                password: ''
            }
        },
        methods: {
            logIn(){}
        }
    };
</script>

<style>

</style>