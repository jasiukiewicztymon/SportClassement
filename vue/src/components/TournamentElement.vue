<template>
    <div class="w-screen h-screen bg-white z-3 overflow-x-hidden">
        <div @click="this.$emit('id', -1)" class="hover:cursor-pointer m-[1.5vw] text-[3vw] md:text-[2vw]">✖️</div>
        <div class="ml-[50%] -translate-x-[50%] w-[80vw] mt-[5vw]">
            <div class="overflow-x-auto">
                <table class="w-[200vw] md:w-[150vw] lg:w-[100vw] xl:w-[80vw]">
                <tr class="text-left grid grid-cols-8">
                    <th class="p-[0.5vw] pl-[0.3vw]">L'équipe</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Matchs joués</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Matchs gagnés</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Matchs nulls</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Matchs perdus</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Buts marqués</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Buts perdus</th>
                    <th class="p-[0.5vw] pl-[0.3vw]">Points</th>
                </tr>
                <tr class="grid grid-cols-8" v-for="item2 in datas.tournaments[id].teams.sort((a, b) => ((a.win * 3 + a.draw) > (b.win * 3 + b.draw)) ? 1 : ((a.win * 3 + a.draw) == (b.win * 3 + b.draw) && (a.goal1 - a.goal2) > (b.goal1 + b.goal2)) ? 1 : -1).reverse()" :key="item2.id">
                    <td class="p-[0.3vw]">{{ item2.name }}</td>
                    <td class="p-[0.3vw]">{{ (item2.win + item2.loose + item2.draw) }}</td>
                    <td class="p-[0.3vw]">{{ item2.win }}</td>
                    <td class="p-[0.3vw]">{{ item2.draw }}</td>
                    <td class="p-[0.3vw]">{{ item2.loose }}</td>
                    <td class="p-[0.3vw]">{{ item2.goal1 }}</td>
                    <td class="p-[0.3vw]">{{ item2.goal2 }}</td>
                    <td class="p-[0.3vw]"><b>{{ (item2.win * 3 + item2.draw) }}</b></td>
                </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../data.json';

export default {
    props: ['id'],
    data() {
        return {
            datas: data
        };
    },
}
</script>
