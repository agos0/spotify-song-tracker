<template>
    <div>
      <navbar v-if="isRecList" />
      <h1>rec list page</h1>
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from '../components/NavBar.vue';
  
  export default {
    components: {
      Navbar
    },
    computed: {
      isRecList() {
        return this.$route.path === '/me/recs';
      }
    }
  };
  </script>
  