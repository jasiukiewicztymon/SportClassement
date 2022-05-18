<template>
    <div id="mainBox">
        <HeaderElement></HeaderElement>
        <main>
        </main>   
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "Sport Ranking",
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
                ],
                link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }]
            }
        },
        data() {
            return {
            };
        },
        methods: {
            
        }
    };
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap')
*
    padding: 0px
    margin: 0px
    font-family: 'Lato', sans-serif
    border: none
    #mainBox
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: calc(170px + 5%) 1fr 300px
        grid-template-areas: "header" "content" "footer"
        HeaderElement
            grid-area: header
        main    
            grid-area: content
</style>