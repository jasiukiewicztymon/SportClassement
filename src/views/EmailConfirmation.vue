<template>
    <div id="mainBox" :class="{ mainBoxActive: showMenu }">
        <header>
            <nav>
                <div>
                    <h1>Sport ranking</h1>
                    <img src="../assets/menu.png" @click="showMenu = !showMenu">
                </div>
                <div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </nav>
        </header>
        <main>
            
        </main>  
        <footer>
            Created with ❤ by <a href="https://github.com/jasiukiewicztymon" target="_blank">Jasiukiewicz Tymon</a>
        </footer> 
    </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
            authentification: false,
            showMenu: false,
            type: this.$route.params.type,
            createAccount: {
                email: "",
                password: "",
                passwordConfirmation: ""
            }
        }
    },
    created() {
        window.addEventListener("resize", this.resize);
    },
    methods: {
        resize(e) {
            if (e.target.innerWidth > 1550) {
                this.showMenu = false
            }
        },
        hideMenu() {
            this.showMenu = false
        }
    }
}
</script>

<style scoped>
    
</style>