<template>
    <ResHeader />
    <form class="add">
        <div class="input-group">
            <label>Product Name:</label>
            <input type="text" name="name" placeholder="Enter Product Name"  v-model="product.name"/>
        </div>
        <label>Amount in stock:</label>
        <input type="number" name="stock" v-model="product.stock"/>
        <label>Unit Price:</label>
        <input type="number" name="price"  v-model="product.price"/>
        <button type="button" v-on:click="addProduct">Update Product</button>
    </form>
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
            product: {
                name: '',
                stock: 0,
                price: 0.0    
            }
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
