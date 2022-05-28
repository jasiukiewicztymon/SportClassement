<template>
    <div id="alert">
        
    </div>
    <div id="verificationCode" v-if="verifycationCode.send">
        <div>
            <h1>E-mail verification</h1>
            <span id="timer">Expire in <b :style="{ color: verifycationCode.timerColor }">{{parseInt(verifycationCode.time / 60)}}:{{verifycationCode.time % 60 < 10 ? '0' : ''}}{{verifycationCode.time % 60}}</b><span @click="closeForm()">x</span></span>
            <div>
                <input type="text" placeholder="your name">
                <input type="text" placeholder="code">
            </div>
            <button>Submit</button>
        </div>
    </div>
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
            <div>
                <header>
                    <button @click="type = 'login'">login</button>
                    <button @click="type = 'register'">register</button>
                </header>
                <div v-if="type == 'login'">
                    <div id="mailLogin">
                        <h2>Login with your mail</h2>
                        <div>
                            <input type="text" name="email" placeholder="e-mail">
                            <input type="text" name="password" placeholder="password">
                            <button>Login</button>
                        </div>
                    </div>
                    <div id="googleLogin">
                        <h2>Login with Google account</h2>
                        <button>Login with Google</button>
                    </div>
                </div>
                <div v-else>
                    <h2>Create a new account</h2>
                    <div>
                        <input type="email" v-model="createAccount.email" placeholder="e-mail">
                        <input type="password" v-model="createAccount.password" placeholder="password">
                        <input type="password" v-model="createAccount.passwordConfirmation" placeholder="password">
                        <button @click="createAccountEP()">Create</button>
                    </div>
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
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import axios from 'axios';

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
            },
            verifycationCode: {
                send: false,
                time: 300,
                try: 0,
                timerColor: 'black'
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
        },
        async createAccountEP() {
            if (this.createAccount.password == this.createAccount.passwordConfirmation) {
                if (this.createAccount.password.length > 7 && this.createAccount.password < 25) {
                    const code = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();

                    await axios.post(`http://localhost:4000/sendCode`, {
                        email: this.createAccount.email,
                        code: code
                    })
                    this.verifycationCode.time = 300;
                    this.verifycationCode.send = true;
                    document.querySelector("body").style.overflow = "hidden";
                    var i = setInterval(() => {
                        this.verifycationCode.time--;
                        if (this.verifycationCode.time == 0) {
                            clearInterval(i)
                            this.verifycationCode.send = false;
                        }
                        if (this.verifycationCode.time <= 10) {
                            this.verifycationCode.timerColor = 'red';
                        }
                    }, 1000)
                }
                else {
                    alert("The password is not long enough")
                }
            }
            else {
                alert("The passwords are not the same")
            }
        }, 
        closeForm() {
            this.verifycationCode.send = false
            document.querySelector("body").style.overflow = "scroll";
        }
    }
}
</script>

<style scoped>
    #verificationCode {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(70, 70, 70, 0.603);
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #verificationCode > div {
        width: 50%;
        min-width: 450px;
        height: 550px;
        border-radius: 40px;
        padding: 30px;
        background: #fff;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 40px 1fr 100px;
        grid-template-areas: "title close" "input input" "submit submit";
    }
    #verificationCode > div > h1 {
        grid-area: title;
        font-size: 25px;
    }
    #verificationCode > div > span {
        grid-area: close;
        text-align: right;
        font-size: 20px;
        transform: translate(-30px, calc(-50% - 3px));
        user-select: none;
    }
    #verificationCode > div > span > span {
        font-size: 50px;
        transform: translate(30px, 5px);
    }
    #verificationCode > div > span > span::after, #verificationCode > div > span::after {
        content: none;
    }
    #verificationCode > div > div {
        grid-area: input;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    #verificationCode > div > div input {
        font-size: 24px;
    }
    #verificationCode > div > div input:nth-child(2) {
        transform: translateY(-80px);
    }
    #verificationCode > div > button {
        grid-area: submit;
        font-size: 30px;
        transition: .5s ease;
    }
    #verificationCode > div > button:hover {
        background: #A8E38D;
        color: #fff;
    }
    #mailLogin {
        width: 100%;
        height: 280px;
    }
    #mailLogin h2 {
        margin-bottom: 10px;
    }
    #mailLogin button {
        margin-top: 45px !important;
        align-self: flex-start !important;
    }
    #mailLogin div {
        display: flex;
        flex-direction: column;
    }
    #googleLogin button {
        align-self: flex-start !important;
        margin-top: 50px !important;
    }
    #googleLogin button:hover {
        background: linear-gradient(90deg, rgba(66,133,244,0.8) 0%, rgba(52,168,83,0.8) 33%, rgba(251,188,5,0.8) 66%, rgba(234,67,53,0.8) 100%) !important;
    }
    header nav {
        grid-template-columns: 25% 70%;
        border-bottom: 1px solid rgb(61, 61, 61);
    }
    header nav div:nth-child(2) {
        justify-content: center;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main > div {
        width: 40%;
        min-width: 450px;
        border: 1px solid rgb(61, 61, 61);
        padding: 40px;
        border-radius: 30px;
        margin-top: 20px;
    }
    main > div header {
        transform: translate(-40px, -40px);
        height: 40px;
        width: 200px;
        border-right: 1px solid rgb(61, 61, 61);
        border-bottom: 1px solid rgb(61, 61, 61);
        border-radius: 30px 0px 30px 0px;
        display: flex;
        justify-content: space-around;
        background: #A8E38D;
    }
    main > div header button {
        background: transparent;
        font-size: 17px;
        color: #fff;
    }
    main > div h2 {
        margin-top: -20px;
    }
    #mainBox > main > div > div > div {
        display: flex;
        flex-direction: column;
    }
    #mainBox > main > div > div > div input {
        font-size: 20px;
        margin-top: 20px;
    }
    #mainBox > main > div > div > div button {
        font-size: 26px;
        margin-top: 60px;
        width: 200px;
        padding: 20px;
        align-self: center;
        transition: .5s ease;
    }
    #mainBox > main > div > div > div button:hover {
        background: #A8E38D;
        color: #fff;
    }
    input {
        width: 300px;
    }
    @media screen and (max-width: 1550px) { 
        .mainBoxActive {
            grid-template-rows: 400px 1fr 100px !important;
        }
        .mainBoxActive header nav div:nth-child(2) {
            height: 100%;
            width: 100%;
            justify-content: center;
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            margin-top: 0px;
        }
        header nav div:nth-child(2) a { 
            margin-bottom: 30px;
        }
        .mainBoxActive main {
            margin-top: -280px !important;
            z-index: -1;
        }
    }
</style>