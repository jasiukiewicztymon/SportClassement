<template>
    <div class="absolute top-0 left-0 w-screen h-screen">
        <h1 class="text-[3.5vw] ml-[2vw] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-rose-600 mt-[1vw] mb-[3vw]">Tournois Le Locle</h1>
        <ul class="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-4 w-[90%] ml-[50%] -translate-x-[50%] hover:cursor-pointer">
            <li @click="this.$emit('open', item1.id)" v-for="item1 in datas.tournaments" :key="item1.name" class="ml-[3vw] mb-[1vw]">
                <h2 class="text-[3.5vw] md:text-[2.5vw] xl:text-[2vw] text-center xl:text-left">{{ item1.name }}</h2>
                <div class="flex xl:mt-[0.5vw] xl:mb-[0.5vw] md:mt-[1vw] md:mb-[1vw] mt-[1.5vw] mb-[1.5vw] xl:justify-start justify-center content-center xl:content-start">
                    <ul v-for="item2 in datas.tournaments[item1.id].teams" :key="item2.name">
                        <li v-if="item2.id < 4" class="text-[2vw] md:text-[1.5vw] xl:text-[0.8vw] mr-[1vw]">
                            {{ item2.name }}
                        </li>
                        <li v-if="item2.id == 4" class="text-[2vw] md:text-[1.5vw] xl:text-[0.8vw] mr-[1vw]">
                            ...
                        </li>
                    </ul>
                </div>
                <div class="flex">
                    <label class="text-[2vw] md:text-[1.5vw] xl:text-[1vw] flex xl:justify-start justify-center content-center xl:content-start">{{ item1.date }} <span v-if="item1.date.split('.')[0] == today[2] && item1.date.split('.')[1] == today[1] && item1.date.split('.')[2] == today[0]" class="ml-[1vw]">🟢</span><span v-else class="ml-[1vw]">🔴</span></label>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import data from '../data.json';

export default {
  name: 'App',
  data() {
    return {
      datas: data,
      today: new Date().toJSON().slice(0,10).split('-'),
    };
  },
  methods: {
  },
};
</script>
