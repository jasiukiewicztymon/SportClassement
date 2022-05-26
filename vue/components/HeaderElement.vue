<template>
    <header>
        <h1>Sport ranking</h1>
        <img src="../assets/public/menu.png">
        <nav v-show="open">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div v-show="open">
            <div v-if="cookies">
                <button>Your profile</button>
                <button>Logout</button>
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
                cookies: false,
                open: true
            }
        },
        methods: {
            hide() {
                this.open = false
                console.log("ok")
            },
            onResize() {
                console.log('Resized')
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
    grid-template-columns: 3fr 5fr 4fr
    grid-template-areas: "logo nav buttons"
    color: white
    background: #b18cff
    img
        display: none
    h1
        grid-area: logo
        display: flex
        align-self: center
        justify-self: center
        font-size: 300%
    nav
        grid-area: nav
        font-size: 30px
        ul
            list-style: none
            display: flex
            position: relative
            top: 50%
            transform: translateY(-50%)
            li
                margin-right: 25px
                margin-left: 25px
                font-weight: bold
                transition: .5s
                cursor: pointer
                &:hover
                    transform: translateY(-15%)
    div
        grid-area: buttons
        display: flex
        align-items: center
        justify-content: center
        button
            background: #fff
            width: 200px
            height: 70px
            margin-left: 35px
            margin-right: 35px
            font-size: 25px

@media screen and (max-width: 1750px) 
    ul
        justify-content: center
@media screen and (max-width: 1400px) 
    header
        width: 100%
        height: 100%
        display: grid
        grid-template-rows: 120px 1fr 1fr
        grid-template-columns: 1fr 1fr
        grid-template-areas: "logo menu" "nav nav" "buttons buttons"
        color: white
        background: #b18cff
    header img 
        width: 60px
        height: 60px
        display: flex
</style>