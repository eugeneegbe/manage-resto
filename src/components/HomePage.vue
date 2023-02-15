<template>
    <ResHeader />
    <img class="logo" src="../assets/yarafdmall.jpeg" />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
</template>

<script>
import ResHeader from './ResHeader.vue'

let user_data = localStorage.getItem('user-data')
let user_name = 'Visitor'
console.log(user_data)
if(user_data !== 'undefined'){
    user_name = JSON.parse(user_data).name
}

export default {
    name: "HomePage",
    components: {
        ResHeader
    },
    data() {
        return {
            name: user_name
        }
    },
    mounted() {
        if (!user_data) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}
</style>
