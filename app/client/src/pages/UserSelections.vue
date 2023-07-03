<template>
    <div>
      <navbar v-if="isUserSelections" />
      <h1>user selections page </h1>
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from '../components/NavBar.vue';
  
  export default {
    components: {
      Navbar
    },
    computed: {
      isUserSelections() {
        return this.$route.path === '/me/selections';
      }
    }
  };
  </script>
  