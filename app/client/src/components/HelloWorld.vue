<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      hello hello
    </h3>
    <button @click="authorize">Authorize</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Entry extends Vue {
  msg!: string

  authorize(): void {
    window.location.href = "http://localhost:3000/login";
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: black;
}
h3 {
  color: black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #8bff76;
}
button {
  background-color: #8bff76;
  border: none;
  color: black;
  padding: 10px 15px;
  border: 2px solid #000000;
  border-radius: 3000px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: #000000;
    color: white;
    border-color: #8bff76;
  }
}
</style>