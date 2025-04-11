<template>
    <div class="combat">
      <h1>Combat Memory</h1>

      <!-- Affichage du timer -->
      <div class="timer">
        <p>Temps restant : {{ timer }}s</p>
      </div>
  
      <!-- Affichage des PV -->
      <div class="health">
        <p>Joueur 1 - PV: {{ player1Health }}</p>
        <p>Joueur 2 - PV: {{ player2Health }}</p>
      </div>

      <!-- Plateau de Memory 5x4 -->
      <div class="memory-board">
        <div v-for="(card, index) in shuffledDeck" :key="index" class="card"
          :class="{'flipped': card.isFlipped, 'matched': card.isMatched}"
          @click="flipCard(index)">
          <img v-if="card.isFlipped || card.isMatched" :src="card.img" alt="Card" />
          <div v-else class="card-back">?</div>
        </div>
      </div>
  
      <!-- Message de fin de jeu -->
      <div v-if="gameOver" class="game-over">
        <p>{{ winner }} gagne !</p>
        <button @click="restartGame">Recommencer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CombatView',
    data() {
      return {
        // Deck initial de cartes
        deck: [
          { img: 'card1.jpg', id: 1, isFlipped: false, isMatched: false },
          { img: 'card1.jpg', id: 2, isFlipped: false, isMatched: false },
          { img: 'card2.jpg', id: 3, isFlipped: false, isMatched: false },
          { img: 'card2.jpg', id: 4, isFlipped: false, isMatched: false },
          { img: 'card3.jpg', id: 5, isFlipped: false, isMatched: false },
          { img: 'card3.jpg', id: 6, isFlipped: false, isMatched: false },
          { img: 'card4.jpg', id: 7, isFlipped: false, isMatched: false },
          { img: 'card4.jpg', id: 8, isFlipped: false, isMatched: false },
          { img: 'card5.jpg', id: 9, isFlipped: false, isMatched: false },
          { img: 'card5.jpg', id: 10, isFlipped: false, isMatched: false },
          { img: 'card6.jpg', id: 11, isFlipped: false, isMatched: false },
          { img: 'card6.jpg', id: 12, isFlipped: false, isMatched: false },
          { img: 'card7.jpg', id: 13, isFlipped: false, isMatched: false },
          { img: 'card7.jpg', id: 14, isFlipped: false, isMatched: false },
          { img: 'card8.jpg', id: 15, isFlipped: false, isMatched: false },
          { img: 'card8.jpg', id: 16, isFlipped: false, isMatched: false },
          { img: 'card9.jpg', id: 17, isFlipped: false, isMatched: false },
          { img: 'card9.jpg', id: 18, isFlipped: false, isMatched: false },
          { img: 'card10.jpg', id: 19, isFlipped: false, isMatched: false },
          { img: 'card10.jpg', id: 20, isFlipped: false, isMatched: false }
        ],
        shuffledDeck: [],
        firstCardIndex: null,
        secondCardIndex: null,
        player1Health: 100,
        player2Health: 100,
        currentPlayer: 1,
        timer: 30,
        gameOver: false,
        winner: null,
        flipTimeout: null,
        gameInterval: null
      };
    },
    mounted() {
      this.shuffleDeck();
      this.startTimer();
    },
    methods: {
      // Mélanger le deck
      shuffleDeck() {
        this.shuffledDeck = this.deck.sort(() => Math.random() - 0.5);
      },
  
      // Retourner la carte et vérifier si une paire est trouvée
      flipCard(index) {
        if (this.gameOver || this.shuffledDeck[index].isFlipped) return;
  
        this.shuffledDeck[index].isFlipped = true;
  
        if (this.firstCardIndex === null) {
          this.firstCardIndex = index;
          return;
        }
  
        this.secondCardIndex = index;
  
        // Vérifier si les cartes sont identiques
        if (this.shuffledDeck[this.firstCardIndex].id === this.shuffledDeck[this.secondCardIndex].id) {
          this.shuffledDeck[this.firstCardIndex].isMatched = true;
          this.shuffledDeck[this.secondCardIndex].isMatched = true;
  
          // Appliquer un effet (par exemple, retirer des PV)
          this.applyEffect();
        } else {
          setTimeout(() => {
            this.shuffledDeck[this.firstCardIndex].isFlipped = false;
            this.shuffledDeck[this.secondCardIndex].isFlipped = false;
          }, 1000);
        }
  
        this.firstCardIndex = null;
        this.secondCardIndex = null;
  
        // Changer de joueur
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
      },
  
      // Appliquer un effet de combat
      applyEffect() {
        if (this.currentPlayer === 1) {
          this.player2Health -= 10; // Joueur 1 attaque le joueur 2
        } else {
          this.player1Health -= 10; // Joueur 2 attaque le joueur 1
        }
  
        if (this.player1Health <= 0 || this.player2Health <= 0) {
          this.endGame();
        }
      },
  
      // Lancer le timer
      startTimer() {
        this.gameInterval = setInterval(() => {
          if (this.timer > 0) {
            this.timer--;
          } else {
            this.endGame();
          }
        }, 1000);
      },
  
      // Fin du jeu
      endGame() {
        clearInterval(this.gameInterval);
        this.gameOver = true;
        this.winner = this.player1Health > 0 ? 'Joueur 1' : 'Joueur 2';
      },
  
      // Redémarrer le jeu
      restartGame() {
        this.shuffledDeck = [];
        this.player1Health = 100;
        this.player2Health = 100;
        this.timer = 30;
        this.currentPlayer = 1;
        this.gameOver = false;
        this.winner = null;
        this.shuffleDeck();
        this.startTimer();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Style du plateau */
  .memory-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .card {
    position: relative;
    width: 100px;
    height: 140px;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }
  
  .card-back {
    font-size: 24px;
    color: #333;
  }
  
  .card img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  
  .flipped {
    background-color: #fff;
  }
  
  .matched {
    background-color: #d3f9d8;
  }
  
  .timer,
  .health {
    margin: 20px 0;
    text-align: center;
  }
  
  .game-over {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
  }
  </style>
  