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
                password: '',
                isLoggedIn: false
            }
        },
        methods: {
            logIn(){
                // let result = await axios.get(
                //     `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                // )
                let result = {"status": 200, "data":[{"name": "admin", "email": "admin@test.com","password": "admin", "id": 1}]}
                if (result.status == 200 && result.data.length >= 0) {
                    console.log(result.data[0])
                    localStorage.setItem('user-data', JSON.stringify((result).data[0]))
                }
            }
        },
        mounted() {
            let user_data = JSON.parse(localStorage.getItem('user-data'))
            if (user_data === null) {
                // this.$router.push({ name: 'SignUp' });
            }else{
                this.$router.push({ name: 'HomePage' })
            }
        }
    };
</script>

<style>

</style>