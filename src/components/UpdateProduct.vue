<template>
    <ResHeader />
    <div class="container text-center  mr-auto">
        <form>
            <div class="form-group">
                <label for="product_name">Product Name</label>
                <input type="text" class="form-control" aria-describedby="nameHelp" v-model="product.name">
                <small id="nameHelp" class="form-text text-muted">Name of the product</small>
            </div>
            <div class="form-group">
                <label for="amount">Amount in stock:</label>
                <input type="number" v-model="product.stock" class="form-control">
            </div>
            <div class="form-group">
                <label for="amount">Amount in stock:</label>
                <input type="number" v-model="product.price" class="form-control">
            </div>
            <button type="button"  class="btn btn-primary " v-on:click="addProduct">Add Product</button>
        </form>
    </div>
</template>

<script>
import ResHeader from './ResHeader'
import axios from 'axios'

export default {
    name: "UpdateProduct",
    components: {
        ResHeader
    },
    data() {
        return {
            product: {
                id: '',
                name: '',
                stock: 0,
                price: 0.0    
            }
        }
    },
    methods: {
        updateProduct(){
            // Make a request to the server to update product with id from route params
            // then redirect to the home page
        }
    },
    async mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))
        let sample = {
            name: "Cassava",
            stock: 300,
            price: 1000
        }
        this.product = sample

        if (user_data) {
            let target_id = [this.$route.params.id]
            let result = await axios.get(
                `http://localhost:3000/products`, {
                "headers": {
                    'Access-Control-Allow-Origin': true,
                }
            });
            if (result.status == 200) {
                this.product = result.data.data.filter(product => product.id == target_id)[0];
                console.log(this.product)
            }else{
                this.$router.push({ name: '/HomePage' })
            }

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
