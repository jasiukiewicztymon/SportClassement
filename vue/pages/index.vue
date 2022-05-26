<template>
    <div id="mainBox">
        <HeaderElement></HeaderElement>
        <main>
            <div id="projectCreation">
                <div>
                    <h1>Create a project</h1>
                    <p>To create a project it's easy, to <span>create an account</span> or <span>log in with Google</span> and go to the dashboard. One time in <span>the dashboard</span>, create a new tournament, set the settings, and finally get the link to <span>your ranking</span>. You can also enable the creation of play table, which shows you who has to play when.</p>
                </div>
                <div>
                    <button>Create now</button>
                </div>
            </div>
            <div id="projectPricing">
                <div>
                    <button>Support us</button>
                </div>
                <div>
                    <h1>Project princing</h1>
                    <p>All of your projects are <span>free</span>, you're just limited by a limit of <span>10 projects</span> and a time limit of <span>7 days</span> because of the memory limit.</p>
                </div>
            </div>
        </main>   
        <FooterElement></FooterElement>
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
                count: 0
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
    box-sizing: border-box
    #mainBox
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: calc(170px + 5%) 1fr 50px
        grid-template-areas: "header" "content" "footer"
        min-height: 100vh
        HeaderElement
            grid-area: header
        main    
            grid-area: content
            text-align: justify
            #projectCreation button, #projectPricing button 
                padding: 30px
                padding-left: 60px
                padding-right: 60px
                font-size: 24px
                transition: .7s ease
                &:hover
                    background: #B18CFF
                    color: white
            #projectCreation
                width: 90%
                margin: 5%
                display: grid
                grid-template-columns: 50% 50%
                div:nth-child(1)
                    padding: 5%
                div:nth-child(2)
                    display: flex
                    align-items: center
                    justify-content: center
            #projectPricing
                width: 90%
                margin: 5%
                display: grid
                grid-template-columns: 60% 40%
                div:nth-child(1)
                    display: flex
                    align-items: center
                    justify-content: center
                    transform: translateX(-10%)
            p 
                font-size: 24px 
            h1
                margin-bottom: 10px
            span 
                display: inline-block
                height: 100%
                &::after
                    content: ""
                    position: relative
                    width: calc(100% + 6px)
                    height: 10px
                    z-index: -1
                    display: flex
                    background: #b18cff   
                    margin-top: -12px     
                    margin-left: -3px 
                    transition: .3s ease 
                    transform: translateY(3px)
                &:hover
                    &::after
                        transform: translateY(6px)         
        FooterElement
            grid-area: footer
@media screen and (max-width: 1400px) 
    #projectCreation, #projectPricing
        display: flex !important
        flex-direction: column
        margin-bottom: 100px !important
    #projectPricing
        width: 80% !important
        margin-left: 10% !important
        flex-direction: column-reverse
        div:nth-child(1)
            display: flex
            align-items: center
            justify-content: center
            transform: translateX(0%) !important
            margin-top: 50px
</style>