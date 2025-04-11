<template>
    <div class="game">
      <h1>Flip ‘n’ Fight</h1>
      <Deck :cards="cards" @select-card="selectCard" />
      <div v-if="selectedCards.length > 0">
        <h2>Cartes sélectionnées:</h2>
        <ul>
          <li v-for="(card, index) in selectedCards" :key="index">{{ card.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Deck from './Deck.vue';
  import { fetchCards } from '../services/api.js';
  
  export default {
    components: {
      Deck,
    },
    data() {
      return {
        cards: [],
        selectedCards: [],
      };
    },
    mounted() {
      this.loadCards();
    },
    methods: {
      async loadCards() {
        this.cards = await fetchCards();
      },
      selectCard(card) {
        if (this.selectedCards.length < 2) {
          this.selectedCards.push(card);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .game {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  