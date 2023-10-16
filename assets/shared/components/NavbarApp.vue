<template >
    <nav class="navbar">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link"  to="/login">Login</router-link>
        <router-link class="link" to="/register">Register</router-link>
    </nav>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        .link{
            margin-right: 1rem;
            text-decoration: none;
            color: #333;
            font-weight: bold;
            font-size: 1.2rem;
            &:hover{
                color: #007bff; 
                
            }
        }
    }
</style>