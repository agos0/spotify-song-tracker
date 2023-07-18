<template>
  <div>
    <navbar v-if="isUserStats" />
    <h1>user stats page</h1>
    <div>
      <select>
        <option value="short_term">Past Month</option>
        <option value="medium_term">Past 6 Months</option>
        <option value="long_term">All Time</option>
      </select>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, /*ref, onMounted*/ } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/NavBar.vue';

// import axios from "axios";

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
