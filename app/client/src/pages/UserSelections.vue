<template>
  <div>
    <navbar v-if="isUserSelections" />
    <h1>user selections page</h1>
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

    const isUserSelections = computed(() => {
      return route.path === '/me/home';
    });

    return {
      isUserSelections
    };
  }
});
</script>
