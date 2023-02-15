<template>
    <ResHeader />
    <img class="logo" src="../assets/yarafdmall.jpeg" />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
</template>

<script>
import ResHeader from './ResHeader.vue'

let user_data = JSON.parse(localStorage.getItem('user-data'))
let user_name = ''

if(user_data){
    user_name = user_data.name
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
        if (this.name == '') {
            this.$router.push({ path: '/login' })
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}
</style>
