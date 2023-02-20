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
        <button type="button" v-on:click="updateProduct">Update</button>
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
    methods: {
        updateProduct(){
            // Make a request to the server to update product with id from route params
            // then redirect to the home page
        }
    },
    mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))

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
