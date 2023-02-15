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
    // import axios from 'axios'

    export default {
        name: 'LogIn',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            async logIn(){
                // let result = await axios.get(
                //     `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                // )
                let result = {"status": 200, "data":[{"name": "admin", "email": "admin@test.com","password": "admin", "id": 1}]}
                if (result.status == 200 && result.data.length >= 0) {
                    console.log(result.data[0])
                    localStorage.setItem('user-data', JSON.stringify((result).data[0]))
                    this.$router.push({ name: 'HomePage' })
            }
            }
        },
        mounted() {
            // Redirect user to homepage if they are signed in already
            let user = JSON.parse(localStorage.getItem('user-data'))
            if (user) {
                this.$router.push({ name: 'HomePage' })
            }
        }
    };
</script>

<style>

</style>