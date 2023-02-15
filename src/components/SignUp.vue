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
            this.$router.go('/')
        }
    }
}
</script>

<style>
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
    width: 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    background-color: #795547;
    cursor: pointer;
}
</style>