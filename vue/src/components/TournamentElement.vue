<template>
    <div class="w-screen h-screen bg-white z-3">
        <div @click="this.$emit('id', -1)" class="hover:cursor-pointer">✖️</div>
        <table>
            <tr>
                <th>L'équipe</th>
                <th>Matchs joués</th>
                <th>Matchs gagnés</th>
                <th>Matchs nulls</th>
                <th>Matchs perdus</th>
                <th>Buts marqués</th>
                <th>Buts perdus</th>
                <th>Points</th>
            </tr>
            <tr v-for="item2 in datas.tournaments[id].teams.sort((a, b) => ((a.win * 3 + a.draw) > (b.win * 3 + b.draw)) ? 1 : ((a.win * 3 + a.draw) == (b.win * 3 + b.draw) && (a.goal1 - a.goal2) > (b.goal1 + b.goal2)) ? 1 : -1).reverse()" :key="item2.id">
                <th>{{ item2.name }}</th>
                <th>{{ (item2.win + item2.loose + item2.draw) }}</th>
                <th>{{ item2.win }}</th>
                <th>{{ item2.draw }}</th>
                <th>{{ item2.loose }}</th>
                <th>{{ item2.goal1 }}</th>
                <th>{{ item2.goal1 }}</th>
                <th>{{ (item2.win * 3 + item2.draw) }}</th>
            </tr>
        </table>
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
