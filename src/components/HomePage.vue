<template>
    <h1>Hello {{name}}, Welcome on Home Page</h1>
</template>

<script>
    let username = JSON.parse( localStorage.getItem( 'user-data' ) ).name
    export default {
        name: "HomePage",
        data() {
            return {
                name: username
            }
        }
    }
</script>