<template>
    <footer>
        Created with ❤ by <a href="https://github.com/jasiukiewicztymon" target="_blank">Jasiukiewicz Tymon</a>
    </footer>
</template>

<script>
    export default {
        name: 'FooterElement',
        data() {
            return {
            }
        }
    };
</script>

<style lang="sass">
    footer
        display: flex
        align-items: center
        justify-content: center
        a 
            text-decoration: none
            color: #000
            font-size: 20px
            margin-left: 10px
            &::after
                content: ""
                width: calc(20px *  8.5)
                height: 15px
                position: relative
                display: flex
                background: #b18cff
                z-index: -1
                transition: .2s ease
                bottom: 10px
            &:hover
                &::after
                    transform: translateY(3px)
</style>