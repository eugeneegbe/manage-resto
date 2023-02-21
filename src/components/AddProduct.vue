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
                <label for="amount">Price per unit:</label>
                <input type="number" v-model="product.price" class="form-control">
            </div>
            <button type="button"  class="btn btn-primary " v-on:click="addProduct">Add Product</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import ResHeader from './ResHeader'

export default {
    name: "AddProduct",
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
        async addProduct(){
            // TODO: use axios to persist product data
            let result = await axios.post(
                    `http://localhost:3000/products`, this.product);
            if(result.data.status == 'success'){
                this.$router.push({ name: 'HomePage' })
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

label{
    display: inline-block;
    width: 320px;
    text-align: left;
    margin-bottom: 2px;
}
input {
  display: inline-block;
}

</style>
