<template>
    <div class="nav">
        <div class="left-menu">
            <router-link to="/login">Home</router-link>
            <router-link to="/add">Add Product</router-link>
        </div>

        <div class="right-menu">
            <p>
            <router-link to="/login">Login</router-link>
            </p>
            <a @click="logout">Logout</a>
        </div>

    </div>
</template>

<script>
    export default {
    name: "ResHeader",
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'LogIn' })
        }
    }
    }
</script>


<style>
.nav{
    background-color: #795547;
    overflow: hidden;
    margin-bottom: 30px;
}

.nav a{
    color: white;
    padding: 14px;
    font-size: large;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    font-weight: 700;
}

.left-menu{
    float: left;
    display: flex;
}

.right-menu {
    float: right;
    display: flex;
}

.nav a:hover{
    cursor: pointer;
    background: #ddd;
    color: #795547;
}
</style>