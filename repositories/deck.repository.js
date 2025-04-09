import Deck from "../models/deck.model.js";
import DeckCard from "../models/deckCard.model.js";
import Card from "../models/card.model.js";

export async function getAllDecks() { 
  return await Deck.findAll();
}

export async function getDeckById(id) {
  return await Deck.findByPk(id);
}

export async function createDeck(data) {
  return await Deck.create(data);
}

export async function updateDeck(id, updates) {
  const deck = await Deck.findByPk(id);
  if (!deck) return null;
  return await deck.update(updates);
}

export async function deleteDeck(id) {
  const deck = await Deck.findByPk(id);
  if (!deck) return null;
  return await deck.destroy();
}

export async function getDeckWithCards(deckId) {
  return await Deck.findByPk(deckId, {
    include: [{ model: Card, through: { attributes: [] } }],
  });
}

export async function getDeckByUserId(userId) {
  return await Deck.findOne({ where: { userId } });
}