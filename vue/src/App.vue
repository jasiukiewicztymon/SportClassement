<template>
  <div class="absolute w-screen h-screen t-0 l-0">
    <MenuElement/>
  </div>
  <div class="absolute w-screen h-screen t-0 l-0 none">
    <TournamentElement/>
  </div>
</template>

<script>
import './assets/tailwind.css';
import MenuElement from './components/MenuElement.vue';
import TournamentElement from './components/TournamentElement.vue'

export default {
  name: 'App',
  components: {
    MenuElement,
    TournamentElement
  }
};
</script>

<style>
.none {
  display: none;
}
</style>
