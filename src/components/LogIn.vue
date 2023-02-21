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
    import axios from 'axios'

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
            async logIn(){
                let result = await axios.get(
                    `http://localhost:3000/user?email=`+this.email+ `&passcode=`+this.password, {
                    "headers": {
                        'Access-Control-Allow-Origin': true,
                        }
                    });
                if (result.status == 200) {
                    console.log(result.data.data)
                    localStorage.setItem('user-data', JSON.stringify((result).data.data[0]))
                    this.$router.push({ name: 'HomePage' })
                }else{
                    // TODO: inform user of wrong credentials
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