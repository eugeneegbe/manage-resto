<template>
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="#">YARA CORP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/add">Add Product</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item ">
                        <a class="nav-link logout-btn" @click="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
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

.navbar{
    background-color: #795547;
    overflow: hidden;
    margin-bottom: 30px;
}


.navbar a{
    color: white;
    padding: 14px;
    font-size: large;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    font-weight: 700;
}

.logout-btn {
    cursor: pointer;
}

/*
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
} */
</style>