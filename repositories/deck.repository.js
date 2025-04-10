import { Deck, Card } from "../models/index.model.js";

export async function getAllDecks() { 
  return await Deck.findAll();
}

export async function getDeckById(id) {
  return await Deck.findByPk(id);
}

export async function createDeck(userId, name) {
  return await Deck.create({ user_id: userId, name: name });
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
  return await Deck.findOne({ where: { user_id: userId } });
}