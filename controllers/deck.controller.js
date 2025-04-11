import { DeckService } from "../services/index.service.js";

export async function getAllDecks(req, res, next) {
  try {
    const decks = await DeckService.getAllDecks();
    res.json(decks);
  } catch (error) {
    next(error);
  }
}

export async function getDeckById(req, res, next) {
  try {
    const id = req.params.id;
    const deck = await DeckService.getDeckById(id);
    res.json(deck);
  } catch (error) {
    next(error);
  }
}

export async function getDeckByUserId(req, res, next) {
  try {
    const userId = req.params.userId;
    const deck = await DeckService.getDeckByUserId(userId);
    res.json(deck);
  } catch (error) {
    next(error);
  }
}

export async function getDeckWithCards(req, res, next) {
  try {
    const deckId = req.params.id;
    const deckWithCards = await DeckService.getDeckWithCards(deckId);
    res.json(deckWithCards);
  } catch (error) {
    next(error);
  }
}

export async function createDeck(req, res, next) {
  try {
    const { userId, name } = req.body;
    const newDeck = await DeckService.createDeck(userId, name);
    res.json(newDeck);
  } catch (error) {
    next(error);
  }
}

export async function updateDeck(req, res, next) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedDeck = await DeckService.updateDeck(id, updates);
    res.json(updatedDeck);
  } catch (error) {
    next(error);
  }
}

export async function deleteDeck(req, res, next) {
  try {
    const id = req.params.id;
    const deletedDeck = await DeckService.deleteDeck(id);
    res.json(deletedDeck);
  } catch (error) {
    next(error);
  }
}
