import { User, Deck, DeckCard } from "../models/index.model.js";
import Card from "../models/card.model.js";
import { Op } from "sequelize";

export async function getAllUsers() {
  return await User.findAll();
}

export async function getUserById(id) {
  return await User.findByPk(id);
}

export async function createUser(data) {
  return await User.create(data);
}

export async function updateUser(id, updates) {
  const user = await User.findByPk(id);
  if (!user) return null;
  return await user.update(updates);
}

export async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (!user) return null;
  return await user.destroy();
}

export async function updateUserCoins(userId, amount) {
  const user = await User.findByPk(userId);
  if (!user) return null;
  user.coins += amount;
  return await user.save();
}

export async function getUserCollection(userId) {
  const deck = await Deck.findOne({ where: { user_id: userId } });
  if (!deck) return [];
  const deckCards = await DeckCard.findAll({ where: { deck_id: deck.id } });
  const cardIds = deckCards.map(dc => dc.card_id);
  return await Card.findAll({ where: { id: { [Op.in]: cardIds } } });
}
