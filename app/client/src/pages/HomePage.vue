<template>
  <div>
    <navbar v-if="isHomePage" />
    <h1>home page</h1>
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

    const isHomePage = computed(() => {
      return route.path === '/me/home';
    });

    return {
      isHomePage
    };
  }
});
</script>
