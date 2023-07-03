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
  background-color: #2c3e50;
  padding: 20px;
  border-bottom: 5px solid #8bff76;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 50px;
  margin-left: 50px;
}

a {
  font-size: larger;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #8bff76;
  }
}
</style>
  