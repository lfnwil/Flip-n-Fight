import Card from "../models/card.model.js";
import { Op } from "sequelize";

export async function getAllCards() {
  return await Card.findAll();
}

export async function getCardById(id) {
  return await Card.findByPk(id);
}

export async function createCard(data) {
  return await Card.create(data);
}

export async function updateCard(id, updates) {
  const card = await Card.findByPk(id);
  if (!card) return null;
  return await card.update(updates);
}

export async function deleteCard(id) {
  const card = await Card.findByPk(id);
  if (!card) return null;
  return await card.destroy();
}

export async function getRandomCards(count) {
  return await Card.findAll({
    order: [Sequelize.literal("RANDOM()")],
    limit: count,
  });
}

export async function getCardsByRarity(rarity) {
  return await Card.findAll({ where: { rarity } });
}