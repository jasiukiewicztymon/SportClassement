<template>
    <div>
        <h1>404 😅</h1>
        <p>Sorry but it looks like the page you're looking for doesn't exists... </p>
        <router-link to="/">Go back to the <span>home</span></router-link>
    </div>
    <router-view />
</template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style scoped>
    * {
        padding: 0px;
        margin: 0px;
        font-family: 'Lato', sans-serif;
        border: none;
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    div {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
        font-size: 26px;
        text-align: center;
        max-width: 80%;
    }
    a {
        text-decoration: none;
        font-size: 20px;
        color: #000;
    }
</style>