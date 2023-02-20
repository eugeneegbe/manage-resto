<template>
    <h1> Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            'name': '',
            'password': '',
            'email': ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/user', {
                'name': this.name,
                'password': this.password,
                'email': this.email
            });
            if (result.status == 201) {
                localStorage.setItem('user-data', JSON.stringify(result.data))
                this.$router.go('/')
            }else{
                this.$router.go('/sign-up')
            }
        }
    },
    mounted(){
        // Redirect user to homepage if they are signed in already
        let user = JSON.parse(localStorage.getItem('user-data'))
        if (user) {
            this.$router.push({name: 'HomePage'})
        }
    }
}
</script>

<style>
</style>