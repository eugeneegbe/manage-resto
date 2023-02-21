<template>
    <ResHeader />
    <img class="logo" src="../assets/yarafdmall.jpeg" />
    <div class="container text-center  mt-5 mb-5">
        <h1>Hello {{ username }}, Welcome on Home Page</h1>
        <table id="productsTable" class="table table-bordered mt-5">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td>Amount In Stock</td>
                    <td>Unit Price</td>
                    <span><p>Action</p></span>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in products" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.stock}}</td>
                    <td>{{item.price}}</td>
                    <router-link class="link-warning" :to="'/update/' +item.id ">Update</router-link>
                    <button class="delete-proudct btn btn-danger" v-on:click="deleProduct(item.id)">Delete</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ResHeader from './ResHeader.vue'
import axios from 'axios'

export default {
    name: "HomePage",
    components: {
        ResHeader
    },
    data() {
        return {
            username: '',
            products: [{
                id: '',
                name: '',
                stock: '',
                price: ''
            }]
        }
    },
    methods: {
        deleProduct(id){
            console.log('del', id);
        }
    },
    async mounted() {
        let user_data = JSON.parse(localStorage.getItem('user-data'))
        if(user_data){
            this.username = user_data.username
            let result = await axios.get(
                    `http://localhost:3000/products`, {
                    "headers": {
                        'Access-Control-Allow-Origin': true,
                        }
                    });
                if (result.status == 200) {
                    this.products = result.data.data
                    this.$router.push({ name: 'HomePage' })
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
td{
    padding: 10px;
    font-size: medium;
    font-weight: 500;
}
.delete-proudct{
    color: black;
} 
</style>
