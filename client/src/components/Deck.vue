<template>
    <div class="deck">
      <Card v-for="card in cards" :key="card.id" :card="card" @select-card="handleSelectCard" />
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  
  export default {
    components: {
      Card,
    },
    props: {
      cards: Array,
    },
    methods: {
      handleSelectCard(card) {
        this.$emit('select-card', card);
      },
    },
  };
  </script>
  
  <style scoped>
  .deck {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  </style>
  