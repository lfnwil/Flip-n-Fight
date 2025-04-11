import { DeckCardRepository, CardRepository } from "../repositories/index.repository.js";

export async function getAllDeckCards() {
  try {
    return await DeckCardRepository.getAllDeckCards();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des cartes de deck.");
  }
}

export async function getDeckCardById(id) {
  try {
    const deckCard = await DeckCardRepository.getDeckCardById(id);
    if (!deckCard) {
      throw new Error("Carte de deck non trouvée.");
    }
    return deckCard;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de la carte du deck.");
  }
}

export async function createDeckCard(data) {
  try {
    return await DeckCardRepository.createDeckCard(data);
  } catch (error) {
    throw new Error("Erreur lors de la création de la carte du deck.");
  }
}

export async function updateDeckCard(id, updates) {
  try {
    const updatedDeckCard = await DeckCardRepository.updateDeckCard(id, updates);
    if (!updatedDeckCard) {
      throw new Error("Carte de deck non trouvée.");
    }
    return updatedDeckCard;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la carte du deck.");
  }
}

export async function deleteDeckCard(id) {
  try {
    const deletedDeckCard = await DeckCardRepository.deleteDeckCard(id);
    if (!deletedDeckCard) {
      throw new Error("Carte de deck non trouvée.");
    }
    return deletedDeckCard;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la carte du deck.");
  }
}

export async function addCardToDeck(deckId, cardId, quantity) {
  try {
    if (!deckId || !cardId || !quantity) {
      throw new Error("Le deckId, cardId et la quantité sont requis.");
    }
    const card = await CardRepository.getCardById(cardId);
    if (!card) {
      throw new Error("Carte non trouvée.");
    }
    return await DeckCardRepository.addCardToDeck(deckId, cardId, quantity);
  } catch (error) {
    throw new Error("Erreur lors de l'ajout de la carte au deck. " + error.message);
  }
}

export async function removeCardFromDeck(deckId, cardId) {
  try {
    await DeckCardRepository.removeCardFromDeck(deckId, cardId);
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la carte du deck.");
  }
}

export async function getCardsInDeck(deckId) {
  try {
    const cardsInDeck = await DeckCardRepository.getCardsInDeck(deckId);
    if (!cardsInDeck) {
      throw new Error("Aucune carte trouvée pour ce deck.");
    }
    return cardsInDeck;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des cartes dans le deck.");
  }
}
