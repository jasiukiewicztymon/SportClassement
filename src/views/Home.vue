<template>
    <div id="mainBox" class="mainBoxActive">
        <header>
            <nav v-if="!authentification && open">
                <div>
                    <h1>Sport ranking</h1>
                    <img src="../assets/menu.png">
                </div>
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
                <div id="menuButtons">
                    <router-link to="/authentification/type/login">Login</router-link>
                    <router-link to="/authentification/type/register">Register</router-link>
                </div>
            </nav>
            <nav v-if="authentification && open">
                <div>
                    <h1>Sport ranking</h1>
                    <img src="../assets/menu.png">
                </div>
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
                <div id="menuButtons">
                    <router-link to="/">Logout</router-link>
                    <router-link to="/dashboard">Dashboard</router-link>
                </div>
            </nav>
        </header>
        <main>
            <div id="projectCreation">
                <div>
                    <h1>Create a project</h1>
                    <p>To create a project it's easy, to <span>create an account</span> or <span>log in with Google</span> and go to the dashboard. One time in <span>the dashboard</span>, create a new tournament, set the settings, and finally get the link to <span>your ranking</span>. You can also enable the creation of play table, which shows you who has to play when.</p>
                </div>
                <div>
                    <button>Create now</button>
                </div>
                <router-view />
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
        <footer>
            Created with ❤ by <a href="https://github.com/jasiukiewicztymon" target="_blank">Jasiukiewicz Tymon</a>
        </footer> 
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSa-xE1BUSxflPTyrD9Cbkka1idEq-mZc",
    authDomain: "sportranking-c870d.firebaseapp.com",
    projectId: "sportranking-c870d",
    storageBucket: "sportranking-c870d.appspot.com",
    messagingSenderId: "377586890900",
    appId: "1:377586890900:web:5c676c704a8bb635e95c81",
    measurementId: "G-N838Y0VH4Y"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { 
    name: 'Home',
    data() {
        return {
            style: {
                purple: '#B18CFF'
            },
            authentification: false,
            open: true
        }
    },
    created() {
        window.addEventListener("resize", this.resize);
    },
    methods: {
        resize(e) {

        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
* {
    padding: 0px;
    margin: 0px;
    font-family: 'Lato', sans-serif;
    border: none;
    box-sizing: border-box;
}
html, body {
    max-height: 100%;
    max-width: 100%;
}
#mainBox {
    display: grid;
    grid-template-rows: 200px 1fr 100px;
    grid-template-columns: 1fr;
    min-height: 100vh;
}
span {
    display: inline-block;
    height: 100%;
}
span::after {
    content: "";
    position: relative;
    width: calc(100% + 6px);
    height: 10px;
    z-index: -1;
    display: flex;
    background: #b18cff;
    margin-top: -12px;     
    margin-left: -3px; 
    transition: .3s ease; 
    transform: translateY(3px);
}
span:hover::after {
    transform: translateY(6px);
}
p {
    font-size: 24px;
}
@media screen and (max-width: 1550px) {
    #mainBox {
        grid-template-rows: 120px 1fr 100px;
    }
    .mainBoxActive {
        grid-template-rows: 600px 1fr 100px !important;
        overflow: hidden;
    }
    #mainBox main {
        margin-top: -480px;
    }
    .mainBoxActive main {
        margin-top: unset !important;
    }
    nav {
        display: flex !important;
        flex-direction: column;
    }
    #mainBox nav div:nth-child(2), #mainBox nav div:nth-child(3) {
        display: none;
    }
    .mainBoxActive nav div:nth-child(2), .mainBoxActive nav div:nth-child(3) {
        display: flex !important;
        flex-direction: column;
    }
    nav img {
        display: flex !important;
    }
}

/*
Header style
*/

header {
    height: 100%;
    width: 100%;
}
nav {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 5fr 4fr;
    grid-template-areas: "logo nav buttons";
    color: white;
    background: #b18cff;
}
header img {
    width: 60px;
    height: 60px;
    display: none;
}
header h1 {
    font-size: 50px;
    margin-left: 30px;
}
nav div {
    display: flex;
    align-items: center;
}
nav div:nth-child(1) {
    padding: 30px;
    justify-content: space-between;
}
nav div:nth-child(3) {
    justify-content: space-around;
} 
nav div:nth-child(3) a {
    background: #FFF;
    color: rgb(73, 73, 73);
    text-align: center;
    padding: 20px;
    width: 33%;
    min-width: 200px;
    border-radius: 10px;
}
nav div:nth-child(2) a {
    transition: .5s ease;
}
nav div:nth-child(2) a:hover {
    transform: translateY(-3px);
}
header a {
    text-decoration: none;
    color: #fff;
    font-size: 40px;
    margin-right: 50px;
    font-weight: bold;
}

@media screen and (max-width: 1750px) {
    nav div:nth-child(2) {
        justify-content: center;
    }
} 

/*
Main style
*/

main {
    text-align: justify;
    min-height: calc(100vh - 350px);
}
#projectCreation button, #projectPricing button {
    padding: 30px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 24px;
    transition: .7s ease;
}
#projectCreation button:hover, #projectPricing button:hover {
    background: #B18CFF;
    color: #fff;
}
#projectCreation {
    width: 90%;
    margin: 5%;
    display: grid;
    grid-template-columns: 50% 50%;
}
#projectCreation div:nth-child(1) {
    padding: 5%;
}
#projectCreation div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
}
#projectPricing {
    width: 90%;
    margin: 5%;
    display: grid;
    grid-template-columns: 60% 40%;
}
#projectPricing div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-10%);
}

/*
Footer style
*/

footer {
    display: flex;
    align-items: center;
    justify-content: center;
}
footer a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    margin-left: 10px;
}
footer a::after {
    content: "";
    width: calc(20px *  8.5);
    height: 15px;
    position: relative;
    display: flex;
    background: #b18cff;
    z-index: -1;
    transition: .2s ease;
    bottom: 10px;
}
footer a:hover::after {
    transform: translateY(3px);
}
</style>