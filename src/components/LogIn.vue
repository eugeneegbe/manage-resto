<template>
    <h1> Login to YARA</h1>
    <div class="register">
        <input type="email" v-model="email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="logIn">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
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