<template>
    <ResHeader />
    <img class="logo" src="../assets/yarafdmall.jpeg" />
    <h1>Hello {{ name }}, Welcome on Home Page</h1>
    <table border="1">
        <tr>
            <td>No</td>
            <td>Name</td>
            <td>Amount In Stock</td>
            <td>Unit Price</td>
            <td>Action</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.price}}</td>
            <router-link :to="'/update/' +item.id ">update</router-link>
        </tr>
    </table>
</template>

<script>
import ResHeader from './ResHeader.vue'


export default {
    name: "HomePage",
    components: {
        ResHeader
    },
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))

        if(user_data){
            this.name = user_data.name
            let restaurants = [
                {
                    "id": 1,
                    "name": "Bavaria",
                    "stock": 25,
                    "price": 1000
                },
                {
                    "id": 2,
                    "name": "Tour Cantelou",
                    "stock": 400,
                    "price": 5000
                },
                {
                    "id": 3,
                    "name": "Djino Cocktail",
                    "stock": 30,
                    "price": 300
                }
            ]
            this.restaurants = restaurants
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
td{
    widows: 160px;
    height: 40px;
    padding: 2px;
}
</style>
