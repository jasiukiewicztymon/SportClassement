<template>
    <header :style="{ background: headercolors[Math.floor(Math.random() * (headercolors.length-1))] }">
        <h1>Sport ranking</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>
            <div v-if="cookies">
                <button>Your profile</button>
            </div>
            <div v-else>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderElement',
        data() {
            return {
                cookies: true,
                headercolors: ["#96d9be", "#b9d996", "#d7d996", "#d9b596", "#d99a96", "#d996cc", "#bf96d9", "#9e96d9", "#96a8d9"]
            }
        }
    };
</script>

<style lang="sass">
header
    width: 100%
    height: 100%
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: 3fr 6fr 1fr
    grid-template-areas: "logo nav buttons"
    color: white
    h1
        grid-area: logo
        display: flex
        align-self: center
        justify-self: center
        font-size: 200%
    nav
        grid-area: nav
        height: 100%
    div
        grid-area: buttons
        height: 100%
</style>