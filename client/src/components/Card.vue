<template>
    <div class="card" @click="selectCard">
      <img :src="card.image" :alt="card.name" />
      <h3>{{ card.name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      card: Object,
    },
    methods: {
      selectCard() {
        this.$emit('select-card', this.card);
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 100px;
    height: 150px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }
  
  .card img {
    width: 80px;
    height: 120px;
  }
  </style>
  