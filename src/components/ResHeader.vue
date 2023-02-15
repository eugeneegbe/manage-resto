<template>
    <div class="nav">
        <div class="left-menu">
            <a href="#">Home</a>
            <a href="#">Product</a>
        </div>

        <div class="right-menu">
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
            this.$router.push({ name: 'Login' })
        }
    }
    }
</script>


<style>
.nav{
    background-color: #795547;
    overflow: hidden;
    margin-bottom: 30px;
    padding: 15px;
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
}

.right-menu {
    float: right;
}

.nav a:hover{
    cursor: pointer;
    background: #ddd;
    color: #795547;
}
</style>