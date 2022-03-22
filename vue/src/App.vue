<template>
  <div class="absolute w-screen h-screen t-0 l-0">
    <AdminPage></AdminPage>
  </div>
  <div class="absolute w-screen h-screen t-0 l-0">
    <MenuElement @open="changeid" @connexion="adminchange"></MenuElement>
  </div>
  <div class="absolute w-screen h-screen t-0 l-0" v-if="id != -1">
    <TournamentElement :id="id" @id="changeid"></TournamentElement>
  </div>
</template>

<script>
import './assets/tailwind.css';
import MenuElement from './components/MenuElement.vue';
import TournamentElement from './components/TournamentElement.vue'
import AdminPage from './components/AdminPage.vue'

export default {
  name: 'App',
  data() {
    return {
      id: -1,
      connected: false,
    };
  },
  components: {
    MenuElement,
    TournamentElement,
    AdminPage
  },
  methods: {
    changeid: function(id) {
      this.id = id;
    },
    adminchange: function() {
      this.connected = true;
    },
    closeadmin: function() {
      this.connected = false;
    }
  }
};
</script>
