<template>
  <div>
    <navbar v-if="isUserStats" />
    <h1>user stats page</h1>
    <div>
      <select v-model="timeRange" @change="fetchTopTracks">
        <option value="short_term">Past Month</option>
        <option value="medium_term">Past 6 Months</option>
        <option value="long_term">All Time</option>
      </select>
    </div>
    <ul>
      <li v-for="track in topTracks" :key="track.name">
        <div>
          <img :src="track.albumCover" :alt="track.name" />
          <div>
            <h3>{{ track.name }}</h3>
            <p>{{ track.artist }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/NavBar.vue';

import axios from "axios";

interface Track {
  name: string;
  artist: string;
  albumCover: string;
}

export default defineComponent({
  components: {
    Navbar
  },
  setup() {
    const route = useRoute();

    const isUserStats = computed(() => {
      return route.path === '/me/stats';
    });

    const topTracks = ref<Track[]>([]);
    const timeRange = ref('medium_term');
    const accessToken = ref('');

    const fetchTopTracks = async () => {
      try {
        const response = await axios.get('/callback', {
          params: {
            time_range: timeRange.value,
            limit: 10,
            accessToken: accessToken.value
          }
        });

        topTracks.value = response.data;
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    onMounted(() => {
      // Extract the access token from the URL query parameters
      const params = new URLSearchParams(window.location.search);
      accessToken.value = params.get('access_token') || '';
      fetchTopTracks();
    });

    return {
      isUserStats,
      topTracks,
      fetchTopTracks,
      timeRange
    };
  }
});
</script>
