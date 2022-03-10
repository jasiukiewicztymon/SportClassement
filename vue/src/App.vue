<template>
  <div class="absolute w-screen h-screen t-0 l-0">
    <MenuElement @open="changeid"></MenuElement>
  </div>
  <div class="absolute w-screen h-screen t-0 l-0" v-if="id != -1">
    <TournamentElement :id="id" @id="changeid"></TournamentElement>
  </div>
</template>

<script>
import './assets/tailwind.css';
import MenuElement from './components/MenuElement.vue';
import TournamentElement from './components/TournamentElement.vue'

export default {
  name: 'App',
  data() {
    return {
      id: -1,
    };
  },
  components: {
    MenuElement,
    TournamentElement
  },
  methods: {
    changeid: function(id) {
      this.id = id;
    },
  }
};
</script>

<style>
.none {
  display: none;
}
</style>
