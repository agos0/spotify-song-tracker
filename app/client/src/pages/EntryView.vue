<template>
  <div class="entry">
    <img alt="SST logo" src="../assets/logo.png">
    <HelloWorld msg="Spotify Song Tracker"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class EntryView extends Vue {}
</script>
