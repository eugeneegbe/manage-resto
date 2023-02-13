<template>
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <button @click="$router.push('/sign-up')"> Sign Up</button>
</template>

<script>
    let username_data = JSON.parse( localStorage.getItem( 'user-data' ) )
    export default {
        name: "HomePage",
        data() {
            return {
                name: username_data ? username_data.name : "Visitor"
            }
        }
    }
</script>
