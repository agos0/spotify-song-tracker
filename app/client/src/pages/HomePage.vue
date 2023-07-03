<template>
    <div>
      <navbar v-if="isHomePage" />
      <h1>home page</h1>
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from '../components/NavBar.vue';
  
  export default {
    components: {
      Navbar
    },
    computed: {
      isHomePage() {
        return this.$route.path === '/me/home';
      }
    }
  };
  </script>
  