<template>
    <nav>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        menuItems: [
          { label: 'Home', url: '/me/home' },
          { label: 'Stats', url: '/me/stats' },
          { label: 'Selections', url: '/me/selections' },
          { label: 'Reccomendations', url: '/me/recs' }
        ]
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
nav {
  padding: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &:hover {
    color: #42b983;
  }

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
  