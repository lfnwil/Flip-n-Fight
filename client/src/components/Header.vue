<template>
    <header>
      <h1>Flip ‘n’ Fight</h1>
      <nav>
        <router-link to="/missions">Missions</router-link>
        <router-link to="/cards">Cartes</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  header {
    text-align: center;
  }
  
  nav {
    margin-top: 10px;
  }
  
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
  </style>
  