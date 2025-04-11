import { DeckRepository } from "../repositories/index.repository.js";

export async function getAllDecks() {
  try {
    return await DeckRepository.getAllDecks();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des decks.");
  }
}

export async function getDeckById(id) {
  try {
    const deck = await DeckRepository.getDeckById(id);
    if (!deck) {
      throw new Error("Deck non trouvé.");
    }
    return deck;
  } catch (error) {
    throw new Error("Erreur lors de la récupération du deck.");
  }
}

export async function createDeck(userId, name) {
  try {
    if (!userId || !name) {
      throw new Error("L'ID de l'utilisateur et le nom du deck sont requis.");
    }
    return await DeckRepository.createDeck(userId, name);
  } catch (error) {
    throw new Error("Erreur lors de la création du deck.");
  }
}

export async function updateDeck(id, updates) {
  try {
    const updatedDeck = await DeckRepository.updateDeck(id, updates);
    if (!updatedDeck) {
      throw new Error("Deck non trouvé.");
    }
    return updatedDeck;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour du deck.");
  }
}

export async function deleteDeck(id) {
  try {
    const deletedDeck = await DeckRepository.deleteDeck(id);
    if (!deletedDeck) {
      throw new Error("Deck non trouvé.");
    }
    return deletedDeck;
  } catch (error) {
    throw new Error("Erreur lors de la suppression du deck.");
  }
}

export async function getDeckWithCards(deckId) {
  try {
    const deckWithCards = await DeckRepository.getDeckWithCards(deckId);
    if (!deckWithCards) {
      throw new Error("Deck ou cartes non trouvées.");
    }
    return deckWithCards;
  } catch (error) {
    throw new Error("Erreur lors de la récupération du deck avec ses cartes.");
  }
}

export async function getDeckByUserId(userId) {
  try {
    const deck = await DeckRepository.getDeckByUserId(userId);
    if (!deck) {
      throw new Error("Aucun deck trouvé pour cet utilisateur.");
    }
    return deck;
  } catch (error) {
    throw new Error("Erreur lors de la récupération du deck de l'utilisateur.");
  }
}
