<template>
    <ResHeader />
    <h1>Hello {{ name }}, Welcome on Update Restaurant Page</h1>
</template>

<script>
import ResHeader from './ResHeader'

export default {
    name: "UpdateProduct",
    components: {
        ResHeader
    },
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))

        if(user_data){
            this.name = user_data.name
        }else{
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
