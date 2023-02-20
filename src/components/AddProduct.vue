<template>
    <ResHeader />
    <form class="add">
        <input type="text" name="name" placeholder="Enter Product Name"  v-model="restaurant.name"/>
        <input type="number" name="stock" placeholder="Amount in Stock" v-model="restaurant.stock"/>
        <input type="number" name="price" placeholder="Unit price" v-model="restaurant.price"/>
        <button type="button" v-on:click="addRestaurant">Add Product</button>
    </form>
</template>

<script>
import ResHeader from './ResHeader'

export default {
    name: "AddProduct",
    components: {
        ResHeader
    },
    data() {
        return {
            restaurant: {
                name: '',
                stock: 0,
                price: 0.0
            }
        }
    },
    methods: {
        addRestaurant(){
            console.log(this.res)
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
