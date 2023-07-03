<template>
  <div>
    <navbar v-if="isUserStats" />
    <h1>user stats page</h1>
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

    const isUserStats = computed(() => {
      return route.path === '/me/stats';
    });

    return {
      isUserStats
    };
  }
});
</script>
