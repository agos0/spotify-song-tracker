<template>
  <div>
    <navbar v-if="isRecList" />
    <h1>reccomendations list</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/NavBar.vue';

export default defineComponent({
  components: {
    Navbar
  },
  setup() {
    const route = useRoute();

    const isRecList = computed(() => {
      return route.path === '/me/home';
    });

    return {
      isRecList
    };
  }
});
</script>
