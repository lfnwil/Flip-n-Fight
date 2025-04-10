document.addEventListener('DOMContentLoaded', async function() {
  if (window.location.pathname === '/cards') {
    try {
      const response = await fetch('/api/v1/cards');
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des cartes.");
      }
      const { cards } = await response.json();
      const cardsList = document.getElementById('cards-list');
      cards.forEach(card => {
        const listItem = document.createElement('li');
        listItem.textContent = `${card.name} - Type: ${card.type}, Rareté: ${card.rarity}, Couleur: ${card.color}`;
        cardsList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Erreur lors du chargement des cartes:", error);
    }
  }

  if (window.location.pathname === '/deck') {
    try {
      const response = await fetch('/api/v1/deck');
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du deck.");
      }
      const { deck } = await response.json();
      const deckList = document.getElementById('deck-list');
      deck.forEach(card => {
        const listItem = document.createElement('li');
        listItem.textContent = `${card.name} - Type: ${card.type}, Rareté: ${card.rarity}`;
        deckList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Erreur lors du chargement du deck:", error);
    }
  }

  if (window.location.pathname === '/booster') {
    const boosterBtn = document.getElementById('booster-btn');
    if (boosterBtn) {
      boosterBtn.addEventListener('click', async () => {
        try {
          const response = await fetch('/api/v1/booster', {
            method: 'POST'
          });
          if (!response.ok) {
            throw new Error("Erreur lors de l'ouverture du booster.");
          }
          const { booster } = await response.json();
          const boosterList = document.getElementById('booster-list');
          boosterList.innerHTML = ""; 
          booster.forEach(card => {
            const listItem = document.createElement('li');
            listItem.textContent = `${card.name} - Type: ${card.type}, Rareté: ${card.rarity}`;
            boosterList.appendChild(listItem);
          });
        } catch (error) {
          console.error("Erreur lors de l'ouverture du booster:", error);
        }
      });
    }
  }
});
