import { CardService } from "../services/index.service.js";

export async function getAllCards(req, res, next) {
  try {
    const cards = await CardService.getAllCards();
    
    res.json(cards);
  } catch (error) {
    next(error);
  }
}

export async function getCardById(req, res, next) {
  try {
    const id = req.params.id;
    const card = await CardService.getCardById(id);
    res.json(card);
  } catch (error) {
    next(error);
  }
}

export async function createCard(req, res, next) {
  try {
    const { name, type, rarity, color, image } = req.body;
    const newCard = await CardService.createCard({
      name,
      type,
      rarity,
      color,
      image
    });
    res.json(newCard);
  } catch (error) {
    next(error);
  }
}

export async function updateCard(req, res, next) {
  try {
    const id = req.params.id;
    const { name, type, rarity, color, image } = req.body;
    const updatedCard = await CardService.updateCard(id, {
      name,
      type,
      rarity,
      color,
      image
    });
    res.json(updatedCard);
  } catch (error) {
    next(error);
  }
}

export async function deleteCard(req, res, next) {
  try {
    const id = req.params.id;
    const deletedCard = await CardService.deleteCard(id);
    res.json(deletedCard);
  } catch (error) {
    next(error);
  }
}

export async function getRandomCards(req, res, next) {
  try {
    const count = parseInt(req.params.count, 10);
    const cards = await CardService.getRandomCards(count);
    res.json(cards);
  } catch (error) {
    next(error);
  }
}

export async function getCardsByRarity(req, res, next) {
  try {
    const rarity = req.params.rarity;
    const cards = await CardService.getCardsByRarity(rarity);
    res.json(cards);
  } catch (error) {
    next(error);
  }
}
