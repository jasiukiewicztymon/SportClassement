<template>
    <div class="w-screen h-screen bg-white overflow-x-hidden">
        <div @click="this.$emit('adminclose')" class="hover:cursor-pointer m-[1.5vw] text-[3vw] md:text-[2vw]">✖️</div>
        <input v-model="username" placeholder="password" class="bg-red-100">
        <button @click="connect(username)">Connctez vous</button>
    </div>
</template>

<script>
import data from '../data.json';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // config
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default {
    props: ['id'],
    data() {
        return {
            datas: data,
            username: "",
        };
    },
    methods: {
        connect: async(name) => {
            console.log(name)
            try {

            }   
            catch (err) {
                console.error(err)
            }        
        }
    }
}
</script>
