import DeckCard from "../models/deckCard.model.js";
import Card from "../models/card.model.js";

export async function getAllDeckCards() {
  return await DeckCard.findAll();
}

export async function getDeckCardById(id) {
  return await DeckCard.findByPk(id);
}

export async function createDeckCard(data) {
  return await DeckCard.create(data);
}

export async function updateDeckCard(id, updates) {
  const deckCard = await DeckCard.findByPk(id);
  if (!deckCard) return null;
  return await deckCard.update(updates);
}

export async function deleteDeckCard(id) {
  const deckCard = await DeckCard.findByPk(id);
  if (!deckCard) return null;
  return await deckCard.destroy();
}

export async function addCardToDeck(deckId, cardId, quantity) {
  return await DeckCard.create({ deck_id: deckId, card_id: cardId, quantity });
}

export async function removeCardFromDeck(deckId, cardId) {
  const deckCard = await DeckCard.findOne({ where: { deck_id: deckId, card_id: cardId } });
  if (deckCard) {
    await deckCard.destroy();
  }
}

export async function getCardsInDeck(deckId) {
  return await DeckCard.findAll({ where: { deckId }, include: Card });
}