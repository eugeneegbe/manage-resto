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
    methods: {
        updateProduct(){
            // Make a request to the server to update product with id from route params
            // then redirect to the home page
        }
    },
    mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))
        let sample = {
            name: "Cassava",
            stock: 300,
            price: 1000
        }
        this.product = sample

        if(user_data){
            console.log(this.$route.params.id)
            /* Use the above id parameter, make a request to the  server
            get the data return and set the data value for product
            This should preset the fields
            like so:

            this.product.name = "Cassava"
            this.product.stock = 300;
            this.product.price = 1000; 
            
            NOTE: with binding, this.restaurant = result.data
            */

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
