<template>
    <img class="logo" src="../assets/yarafdmall.jpeg" />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
</template>

<script>
let username_data = JSON.parse(localStorage.getItem('user-data'))
const capitalized_user = username_data ?
    username_data.name.charAt(0).toUpperCase() + username_data.name.slice(1) :
    null;
export default {
    name: "HomePage",
    data() {
        return {
            name: capitalized_user
        }
    },
    mounted() {
        if (!username_data) {
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
