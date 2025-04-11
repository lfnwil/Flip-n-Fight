import { DeckCardService } from "../services/index.service.js";

export async function getAllDeckCards(req, res, next) {
  try {
    const deckCards = await DeckCardService.getAllDeckCards();
    res.json(deckCards);
  } catch (error) {
    next(error);
  }
}

export async function getDeckCardById(req, res, next) {
  try {
    const id = req.params.id;
    const deckCard = await DeckCardService.getDeckCardById(id);
    res.json(deckCard);
  } catch (error) {
    next(error);
  }
}

export async function createDeckCard(req, res, next) {
  try {
    const { deck_id, card_id, quantity } = req.body;
    const newDeckCard = await DeckCardService.createDeckCard({
      deck_id,
      card_id,
      quantity,
    });
    res.json(newDeckCard);
  } catch (error) {
    next(error);
  }
}

export async function updateDeckCard(req, res, next) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedDeckCard = await DeckCardService.updateDeckCard(id, updates);
    res.json(updatedDeckCard);
  } catch (error) {
    next(error);
  }
}

export async function deleteDeckCard(req, res, next) {
  try {
    const id = req.params.id;
    const deletedDeckCard = await DeckCardService.deleteDeckCard(id);
    res.json(deletedDeckCard);
  } catch (error) {
    next(error);
  }
}

export async function addCardToDeck(req, res, next) {
  try {
    const { deckId, cardId, quantity } = req.body;
    const result = await DeckCardService.addCardToDeck(deckId, cardId, quantity);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function removeCardFromDeck(req, res, next) {
  try {
    const { deckId, cardId } = req.body;
    await DeckCardService.removeCardFromDeck(deckId, cardId);
    res.json({ message: "Carte supprimée du deck." });
  } catch (error) {
    next(error);
  }
}

export async function getCardsInDeck(req, res, next) {
  try {
    const deckId = req.params.deckId;
    const cards = await DeckCardService.getCardsInDeck(deckId);
    res.json(cards);
  } catch (error) {
    next(error);
  }
}
