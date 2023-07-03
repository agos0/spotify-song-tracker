<template>
    <div>
      <navbar v-if="isUserStats" />
      <h1>user stats page</h1>
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from '../components/NavBar.vue';
  
  export default {
    components: {
      Navbar
    },
    computed: {
      isUserStats() {
        return this.$route.path === '/me/stats';
      }
    }
  };
  </script>
  